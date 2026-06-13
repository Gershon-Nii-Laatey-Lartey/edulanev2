import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CheckCircle, XCircle, AlertCircle, ChevronRight, GraduationCap, ArrowLeft, Filter, BookOpen } from 'lucide-react'
import './Results.css'

// Mock data — replace with real API
const MOCK_GRADES = [
  { subject: 'Core English', grade: 'B2', score: 60 },
  { subject: 'Core Maths', grade: 'B3', score: 55 },
  { subject: 'Social Studies', grade: 'C4', score: 50 },
  { subject: 'Integrated Science', grade: 'C5', score: 48 },
  { subject: 'Elective Maths', grade: 'B2', score: 60 },
  { subject: 'Physics', grade: 'B3', score: 55 },
  { subject: 'Chemistry', grade: 'C4', score: 50 },
  { subject: 'Biology', grade: 'C5', score: 48 },
]

const MOCK_MATCHES = [
  {
    uni: 'University of Ghana',
    campus: 'Legon, Accra',
    programme: 'BSc Computer Science',
    cutoff: 12,
    aggregate: 11,
    status: 'eligible',
    chance: 92,
  },
  {
    uni: 'KNUST',
    campus: 'Kumasi',
    programme: 'BSc Information Technology',
    cutoff: 14,
    aggregate: 11,
    status: 'eligible',
    chance: 88,
  },
  {
    uni: 'UCC',
    campus: 'Cape Coast',
    programme: 'BSc Computer Science',
    cutoff: 16,
    aggregate: 11,
    status: 'eligible',
    chance: 85,
  },
  {
    uni: 'University of Ghana',
    campus: 'Legon, Accra',
    programme: 'BSc Mathematics',
    cutoff: 10,
    aggregate: 11,
    status: 'borderline',
    chance: 62,
  },
  {
    uni: 'KNUST',
    campus: 'Kumasi',
    programme: 'BSc Electrical Engineering',
    cutoff: 8,
    aggregate: 11,
    status: 'borderline',
    chance: 48,
  },
  {
    uni: 'UG Medical School',
    campus: 'Legon, Accra',
    programme: 'MBChB Medicine & Surgery',
    cutoff: 6,
    aggregate: 11,
    status: 'ineligible',
    chance: 5,
  },
]

const GRADE_COLOR = {
  A1: '#1a3a2a', A2: '#1a3a2a',
  B2: '#2d6a4f', B3: '#2d6a4f',
  C4: '#6b8f71', C5: '#9aaf9e', C6: '#b8c9bb',
  D7: '#c4a882', E8: '#c46b6b', F9: '#e05252',
}

const STATUS_CONFIG = {
  eligible: { icon: CheckCircle, label: 'Eligible', color: 'var(--green-deep)' },
  borderline: { icon: AlertCircle, label: 'Borderline', color: '#b07c1a' },
  ineligible: { icon: XCircle, label: 'Not eligible', color: '#c94040' },
}

export default function Results() {
  const [params] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const indexNum = params.get('index')

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  const filtered = MOCK_MATCHES.filter(m => filter === 'all' || m.status === filter)

  if (loading) return (
    <div className="results-loading">
      <div className="results-loading__spinner"></div>
      <p>Processing your results<span className="ellipsis"></span></p>
      <p className="results-loading__sub">Matching against 40+ universities and 200+ programmes</p>
    </div>
  )

  return (
    <main className="results">
      {/* Back */}
      <div className="results__nav">
        <div className="container">
          <Link to="/" className="results__back">
            <ArrowLeft size={16} />
            Back to search
          </Link>
        </div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="results__header">
          <div className="results__title-group">
            <p className="results__index">
              {indexNum ? `Index: ${indexNum}` : 'WASSCE Results'}
            </p>
            <h1 className="results__title">Your university matches</h1>
            <p className="results__sub">Based on your grades, here are the programmes you qualify for — ranked by match strength.</p>
          </div>

          <div className="results__aggregate">
            <span className="results__aggregate-label">Your aggregate</span>
            <span className="results__aggregate-value">11</span>
            <span className="results__aggregate-note">Sciences</span>
          </div>
        </div>

        {/* Grades strip */}
        <div className="grades-strip">
          <p className="grades-strip__label">Extracted grades</p>
          <div className="grades-strip__list">
            {MOCK_GRADES.map(g => (
              <div key={g.subject} className="grade-chip">
                <span className="grade-chip__subject">{g.subject}</span>
                <span
                  className="grade-chip__grade"
                  style={{ background: GRADE_COLOR[g.grade] || '#6b8f71', color: 'white' }}
                >
                  {g.grade}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="results__filter">
          <Filter size={14} />
          <span className="results__filter-label">Filter:</span>
          {['all', 'eligible', 'borderline', 'ineligible'].map(f => (
            <button
              key={f}
              className={`results__filter-btn ${filter === f ? 'results__filter-btn--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All matches' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Matches */}
        <div className="matches">
          {filtered.map((m, i) => {
            const Cfg = STATUS_CONFIG[m.status]
            const Icon = Cfg.icon
            return (
              <div key={i} className={`match-card match-card--${m.status}`}>
                <div className="match-card__left">
                  <div className="match-card__rank">#{i + 1}</div>
                  <div className="match-card__body">
                    <div className="match-card__programme">
                      <BookOpen size={14} />
                      {m.programme}
                    </div>
                    <div className="match-card__uni">{m.uni} &mdash; {m.campus}</div>
                  </div>
                </div>

                <div className="match-card__right">
                  <div className="match-card__cutoff">
                    <span className="match-card__stat-label">Cutoff</span>
                    <span className="match-card__stat-val">{m.cutoff}</span>
                  </div>
                  <div className="match-card__agg">
                    <span className="match-card__stat-label">Your agg.</span>
                    <span className="match-card__stat-val">{m.aggregate}</span>
                  </div>
                  <div className="match-card__chance">
                    <div
                      className="match-card__chance-bar"
                      style={{ '--pct': `${m.chance}%`, '--color': Cfg.color }}
                    ></div>
                    <span className="match-card__chance-label">{m.chance}% match</span>
                  </div>
                  <div className="match-card__status" style={{ color: Cfg.color }}>
                    <Icon size={15} />
                    {Cfg.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="results__cta">
          <div className="results__cta-card">
            <GraduationCap size={24} />
            <div>
              <h3>Want us to handle the entire application?</h3>
              <p>Our admissions team will shortlist, fill forms, prepare documents, and follow up until you have an offer letter.</p>
            </div>
            <Link to="/services" className="btn btn--green btn--md">
              View admissions service
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
