import { useState } from 'react'
import { X, FileText, Phone, Mail, CreditCard, CheckCircle, ChevronRight, Shield } from 'lucide-react'
import './Modal.css'

const PLANS = [
  { qty: 1, price: 15, label: 'Single checker' },
  { qty: 3, price: 40, label: '3 checkers', popular: true },
  { qty: 5, price: 60, label: '5 checkers' },
]

export default function CheckerModal({ onClose }) {
  const [selected, setSelected] = useState(PLANS[0])
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal modal--sm">
        <div className="modal__header">
          <div className="modal__title-group">
            <FileText size={18} className="modal__title-icon" />
            <h2 className="modal__title">Buy WASSCE checker</h2>
          </div>
          <button className="modal__close" onClick={onClose}><X size={18} /></button>
        </div>

        {!submitted ? (
          <div className="modal__body">
            {step === 1 && (
              <>
                <p className="checker-modal__sub">Select how many checker pins you need. We will deliver them to your email instantly after payment.</p>

                <div className="checker-modal__plans">
                  {PLANS.map(plan => (
                    <button
                      key={plan.qty}
                      className={`checker-modal__plan ${selected.qty === plan.qty ? 'checker-modal__plan--selected' : ''}`}
                      onClick={() => setSelected(plan)}
                    >
                      {plan.popular && <span className="checker-modal__plan-badge">Popular</span>}
                      <span className="checker-modal__plan-label">{plan.label}</span>
                      <span className="checker-modal__plan-price">GHS {plan.price}</span>
                    </button>
                  ))}
                </div>

                <div className="checker-modal__total">
                  <span>Total</span>
                  <strong>GHS {selected.price}</strong>
                </div>

                <button className="btn btn--green btn--md btn--full" onClick={() => setStep(2)}>
                  Continue to payment <ChevronRight size={16} />
                </button>

                <div className="checker-modal__trust">
                  <Shield size={13} />
                  Official WAEC-authorized checker pins. Delivered in under 10 minutes.
                </div>
              </>
            )}

            {step === 2 && (
              <form className="appt-form" onSubmit={handleSubmit}>
                <div className="appt-form__booking-summary">
                  <FileText size={14} />
                  <span>{selected.label} &middot; GHS {selected.price}</span>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={() => setStep(1)}>Change</button>
                </div>

                <div className="appt-form__field">
                  <label><Phone size={13} /> Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="appt-form__field">
                  <label><Mail size={13} /> Email — checker will be sent here</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="appt-form__field">
                  <label><Phone size={13} /> MoMo number</label>
                  <input
                    type="tel"
                    placeholder="024 000 0000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    required
                  />
                </div>

                <div className="checker-modal__payment-note">
                  <CreditCard size={14} />
                  <span>You will receive a MTN MoMo prompt to approve GHS {selected.price}. Checker delivered after confirmation.</span>
                </div>

                <button type="submit" className="btn btn--green btn--md btn--full">
                  Pay GHS {selected.price} via MoMo <ChevronRight size={16} />
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="modal__success">
            <div className="modal__success-icon">
              <CheckCircle size={32} />
            </div>
            <h3>Payment request sent</h3>
            <p>Check your phone for a MoMo prompt. Once confirmed, your checker pin will be sent to <strong>{form.email}</strong>.</p>
            <button className="btn btn--outline btn--md" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  )
}
