import { FileText, Cpu, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './HowItWorks.css'

const STEPS = [
  {
    icon: FileText,
    title: 'Enter your results',
    detail: [
      'Type your WASSCE index number and we fetch directly from WAEC.',
      'Or upload a photo or PDF of your result slip.',
      'Or enter grades manually, subject by subject.',
    ],
  },
  {
    icon: Cpu,
    title: 'We process and extract',
    detail: [
      'Our system reads your grades, identifies your elective cluster, and computes your aggregate.',
      'We handle A1–F9 grading and cross-check subject eligibility per programme requirements.',
      'Processing takes under 5 seconds.',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Get your matches',
    detail: [
      'We compare your results against the latest cutoff points for all accredited universities.',
      'You get a ranked list of eligible programmes with match probability.',
      'Filter by university, location, programme type, or subject combination.',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Apply — with or without us',
    detail: [
      'Use your match list to apply directly on your own.',
      'Or let EduLane handle the entire admissions process for you.',
      'We contact you by email with guidance either way.',
    ],
  },
]

const FAQS = [
  {
    q: 'Is this free?',
    a: 'University matching is completely free. We charge only for WASSCE checker pins and the full admissions management service.',
  },
  {
    q: 'Which universities are covered?',
    a: 'We cover all 10 public universities and over 30 accredited private universities in Ghana, including UG, KNUST, UCC, UDS, UPSA, GIMPA, Ashesi, and more.',
  },
  {
    q: 'How accurate are the cutoff points?',
    a: 'We update cutoff points each academic year as soon as the universities publish them. Our team verifies these against official admissions office data.',
  },
  {
    q: 'What is an aggregate and how is it calculated?',
    a: 'Your WASSCE aggregate is calculated from your best 6 subjects — the 4 compulsory core subjects plus your 2 best electives. Lower aggregates are better (the lowest possible is 6).',
  },
  {
    q: 'Can I use this if my results are not yet out?',
    a: 'Yes — you can enter predicted or mock grades to see what programmes you might qualify for, then re-run with your actual grades once they are released.',
  },
  {
    q: 'How does the full admissions service work?',
    a: 'Book an appointment, speak with one of our advisors, and we take over — from form filling and document preparation to following up with admissions offices until you have an offer letter.',
  },
]

export default function HowItWorks() {
  return (
    <main className="hiw">
      <div className="hiw__hero">
        <div className="container">
          <p className="section-eyebrow">The process</p>
          <h1 className="hiw__title">How EduLane works</h1>
          <p className="hiw__sub">From WASSCE results to a university offer — here is exactly what happens, and how we help at every step.</p>
        </div>
      </div>

      <div className="container">
        {/* STEPS */}
        <div className="hiw-steps">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="hiw-step">
                <div className="hiw-step__left">
                  <div className="hiw-step__num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="hiw-step__line"></div>
                </div>
                <div className="hiw-step__right">
                  <div className="hiw-step__icon">
                    <Icon size={20} />
                  </div>
                  <h2 className="hiw-step__title">{step.title}</h2>
                  <ul className="hiw-step__detail">
                    {step.detail.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ */}
        <div className="hiw-faq">
          <h2 className="hiw-faq__title">Questions</h2>
          <div className="hiw-faq__list">
            {FAQS.map(f => (
              <div key={f.q} className="hiw-faq__item">
                <h3 className="hiw-faq__q">{f.q}</h3>
                <p className="hiw-faq__a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hiw-cta">
          <h2>Ready to see your matches?</h2>
          <p>It takes less than a minute and it's free.</p>
          <Link to="/" className="btn btn--green btn--lg">
            Check my results <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}
