import { Link } from 'react-router-dom'
import { CheckCircle, GraduationCap, FileText, Calendar, Mail, ArrowRight, Star, Users, BookOpen, Zap } from 'lucide-react'
import HeroInput from '../components/HeroInput'
import './Landing.css'

const STATS = [
  { value: '40+', label: 'Universities covered' },
  { value: '200+', label: 'Programmes mapped' },
  { value: '98%', label: 'Match accuracy' },
  { value: '24h', label: 'Results turnaround' },
]

const HOW_STEPS = [
  {
    num: '01',
    icon: FileText,
    title: 'Enter your results',
    desc: 'Input your index number, upload your result slip, or enter grades manually. We support all WASSCE subjects.',
  },
  {
    num: '02',
    icon: Zap,
    title: 'We extract and process',
    desc: 'Our system reads your grades, calculates your aggregate, and maps your elective subjects to programmes.',
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'See your matches',
    desc: 'Get ranked university and programme matches based on your results and the latest cutoff points — with odds.',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Apply with confidence',
    desc: 'Use our full admissions service or go at it yourself with everything you need to make the right call.',
  },
]

const SERVICES = [
  {
    icon: FileText,
    title: 'WASSCE Result Checker',
    price: 'GHS 15',
    desc: 'Buy a results checker pin instantly. Delivered to your email within minutes.',
    cta: 'Buy checker',
    type: 'checker',
  },
  {
    icon: GraduationCap,
    title: 'University Matching',
    price: 'Free',
    desc: 'Instant programme matches across all accredited Ghanaian universities based on your actual grades.',
    cta: 'Check matches',
    type: 'match',
  },
  {
    icon: Calendar,
    title: 'Full Admissions Service',
    price: 'GHS 300',
    desc: 'We handle everything — shortlisting, forms, documentation, and follow-up — until you get an offer letter.',
    cta: 'Book appointment',
    type: 'admissions',
  },
]

const TESTIMONIALS = [
  {
    name: 'Abena Mensah',
    school: 'KNUST — BSc Computer Science',
    text: 'I had no idea I qualified for my programme. EduLane matched me and my advisor walked me through the entire application. I got an offer in 3 weeks.',
  },
  {
    name: 'Kwame Asare',
    school: 'UG — BSc Economics',
    text: 'The matching is scary accurate. It told me exactly which programmes I could get and ranked them by probability. Nothing else does this.',
  },
  {
    name: 'Efua Acheampong',
    school: 'UCC — BSc Nursing',
    text: 'I bought my checker and had it in 10 minutes. Then ran my results through the matcher — ended up at a school I never considered.',
  },
]

const UNIVERSITIES = [
  'University of Ghana', 'KNUST', 'UCC', 'UDS', 'UENR',
  'Ashesi University', 'University of Energy', 'UPSA', 'GIMPA', 'UG Medical School',
]

export default function Landing({ onBookAppointment, onBuyChecker }) {
  return (
    <main className="landing">
      {/* HERO */}
      <section className="hero">
        <div className="hero__inner">
          <h1 className="hero__headline">
            Know where you <br />
            <em>belong</em>
          </h1>

          <p className="hero__sub">
            Enter your index number or upload your result slip. We match you to programmes across 40+ universities — instantly, based on real cutoff points.
          </p>

          <HeroInput />

          {/* Stats row */}
          <div className="hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITY STRIP */}
      <section className="uni-strip">
        <div className="uni-strip__inner">
          <span className="uni-strip__label">Covering</span>
          <div className="uni-strip__scroll">
            {[...UNIVERSITIES, ...UNIVERSITIES].map((u, i) => (
              <span key={i} className="uni-strip__item">{u}</span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">The process</p>
            <h2 className="section-title">How EduLane works</h2>
            <p className="section-sub">Four steps from results to the right university programme.</p>
          </div>

          <div className="steps">
            {HOW_STEPS.map(step => {
              const Icon = step.icon
              return (
                <div key={step.num} className="step">
                  <div className="step__head">
                    <span className="step__num">{step.num}</span>
                    <div className="step__icon">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__desc">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--tinted">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What we offer</p>
            <h2 className="section-title">Everything you need, in one place</h2>
          </div>

          <div className="services-grid">
            {SERVICES.map(svc => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className="service-card">
                  <div className="service-card__icon">
                    <Icon size={20} />
                  </div>
                  <div className="service-card__price">{svc.price}</div>
                  <h3 className="service-card__title">{svc.title}</h3>
                  <p className="service-card__desc">{svc.desc}</p>
                  <button
                    className="btn btn--outline btn--md service-card__cta"
                    onClick={svc.type === 'checker' ? onBuyChecker : svc.type === 'admissions' ? onBookAppointment : () => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {svc.cta}
                    <ArrowRight size={15} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Student stories</p>
            <h2 className="section-title">Results that speak for themselves</h2>
          </div>

          <div className="testimonials">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial">
                <div className="testimonial__stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="testimonial__text">"{t.text}"</p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="testimonial__name">{t.name}</p>
                    <p className="testimonial__school">{t.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <div className="cta-banner__text">
              <h2 className="cta-banner__title">Not sure where to start?</h2>
              <p className="cta-banner__sub">Let us contact you. Drop your email and we will reach out with everything you need to know for your specific results and course interests.</p>
            </div>
            <form className="cta-banner__form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="cta-banner__input"
              />
              <button type="submit" className="btn btn--green btn--md">
                <Mail size={15} />
                Get in touch
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
