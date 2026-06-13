import { FileText, GraduationCap, Calendar, CheckCircle, ArrowRight, Shield, Clock, Users } from 'lucide-react'
import './Services.css'

const CHECKER_PLANS = [
  { qty: 1, price: 15, per: 15, label: 'Single' },
  { qty: 3, price: 40, per: 13.3, label: 'Family pack', popular: true },
  { qty: 5, price: 60, per: 12, label: 'Bulk' },
]

const ADMISSIONS_INCLUSIONS = [
  'Programme shortlisting based on your results',
  'School selection and prioritisation strategy',
  'Application form completion',
  'Supporting documents preparation',
  'Direct liaison with admissions offices',
  'Email and phone follow-up until offer',
  'Post-offer acceptance guidance',
]

export default function Services({ onBookAppointment, onBuyChecker }) {
  return (
    <main className="services">
      <div className="services__hero">
        <div className="container">
          <p className="section-eyebrow">What we offer</p>
          <h1 className="services__title">Services built for Ghanaian students</h1>
          <p className="services__sub">
            From a simple results checker pin to a fully managed admissions experience — pick what you need.
          </p>
        </div>
      </div>

      <div className="container">
        {/* ─── CHECKER ─── */}
        <section className="svc-section">
          <div className="svc-section__header">
            <div className="svc-section__icon">
              <FileText size={22} />
            </div>
            <div>
              <h2 className="svc-section__title">WASSCE Result Checker</h2>
              <p className="svc-section__sub">Buy a checker pin and view your official WAEC results online. Delivered to your email instantly.</p>
            </div>
          </div>

          <div className="checker-plans">
            {CHECKER_PLANS.map(plan => (
              <div key={plan.qty} className={`checker-plan ${plan.popular ? 'checker-plan--popular' : ''}`}>
                {plan.popular && <div className="checker-plan__badge">Most popular</div>}
                <div className="checker-plan__qty">{plan.qty} {plan.qty === 1 ? 'pin' : 'pins'}</div>
                <div className="checker-plan__label">{plan.label}</div>
                <div className="checker-plan__price">GHS {plan.price}</div>
                <div className="checker-plan__per">GHS {plan.per.toFixed(0)}/pin</div>
                <button className="btn btn--green btn--md" onClick={onBuyChecker}>
                  Buy now <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

          <div className="checker-notes">
            <div className="checker-note">
              <Clock size={14} />
              Delivered within 10 minutes
            </div>
            <div className="checker-note">
              <Shield size={14} />
              Official WAEC-authorized pins
            </div>
            <div className="checker-note">
              <CheckCircle size={14} />
              Valid for 2 logins
            </div>
          </div>
        </section>

        <div className="svc-divider"></div>

        {/* ─── MATCHING ─── */}
        <section className="svc-section">
          <div className="svc-section__header">
            <div className="svc-section__icon svc-section__icon--light">
              <GraduationCap size={22} />
            </div>
            <div>
              <h2 className="svc-section__title">University Matching</h2>
              <p className="svc-section__sub">Free, instant matching across 40+ universities — based on your actual grades and current cutoff points.</p>
            </div>
            <div className="svc-section__price">Free</div>
          </div>

          <div className="matching-features">
            {[
              'Covers all accredited Ghanaian public and private universities',
              'Updated with the latest cutoff points each academic year',
              'Shows match probability and chance of admission',
              'Filters by programme type, location, and your subject combination',
              'Compare up to 5 programmes side by side',
            ].map(f => (
              <div key={f} className="matching-feature">
                <CheckCircle size={15} className="matching-feature__icon" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <a href="/" className="btn btn--outline btn--md">
            Try the matcher now <ArrowRight size={15} />
          </a>
        </section>

        <div className="svc-divider"></div>

        {/* ─── FULL ADMISSIONS ─── */}
        <section className="svc-section">
          <div className="svc-section__header">
            <div className="svc-section__icon">
              <Calendar size={22} />
            </div>
            <div>
              <h2 className="svc-section__title">Full Admissions Service</h2>
              <p className="svc-section__sub">We handle your entire university application — from shortlisting to the offer letter.</p>
            </div>
            <div className="svc-section__price">GHS 300</div>
          </div>

          <div className="admissions-grid">
            <div className="admissions-inclusions">
              <p className="admissions-inclusions__title">What's included</p>
              {ADMISSIONS_INCLUSIONS.map(item => (
                <div key={item} className="admissions-inclusion">
                  <CheckCircle size={15} />
                  {item}
                </div>
              ))}
            </div>

            <div className="admissions-cta-card">
              <div className="admissions-cta-card__top">
                <Users size={32} className="admissions-cta-card__icon" />
                <h3>Book your consultation</h3>
                <p>A 30-minute session with one of our admissions advisors — we review your results, discuss your options, and set a clear plan.</p>
              </div>
              <button className="btn btn--green btn--lg btn--full" onClick={onBookAppointment}>
                Book appointment <ArrowRight size={16} />
              </button>
              <p className="admissions-cta-card__note">
                First consultation is free. Full service fee applies after you decide to proceed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
