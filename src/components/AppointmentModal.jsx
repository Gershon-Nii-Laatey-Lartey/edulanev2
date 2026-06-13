import { useState } from 'react'
import { X, Calendar, Clock, User, Mail, Phone, ChevronRight, CheckCircle } from 'lucide-react'
import './Modal.css'

const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const WEEKS = [
  ['Jun 16', 'Jun 17', 'Jun 18', 'Jun 19', 'Jun 20'],
  ['Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27'],
]

export default function AppointmentModal({ onClose }) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal__header">
          <div className="modal__title-group">
            <Calendar size={18} className="modal__title-icon" />
            <h2 className="modal__title">Book an appointment</h2>
          </div>
          <button className="modal__close" onClick={onClose}><X size={18} /></button>
        </div>

        {!submitted ? (
          <>
            {/* Step indicators */}
            <div className="modal__steps">
              {['Pick a time', 'Your details'].map((s, i) => (
                <div key={i} className={`modal__step ${step === i + 1 ? 'modal__step--active' : ''} ${step > i + 1 ? 'modal__step--done' : ''}`}>
                  <div className="modal__step-num">{step > i + 1 ? '✓' : i + 1}</div>
                  <span>{s}</span>
                </div>
              ))}
            </div>

            <div className="modal__body">
              {step === 1 && (
                <div className="appt-picker">
                  <p className="appt-picker__label">Select a date</p>
                  <div className="appt-calendar">
                    <div className="appt-calendar__days-header">
                      {DAYS.map(d => <span key={d}>{d}</span>)}
                    </div>
                    {WEEKS.map((week, wi) => (
                      <div key={wi} className="appt-calendar__week">
                        {week.map(date => (
                          <button
                            key={date}
                            className={`appt-calendar__day ${selectedDate === date ? 'appt-calendar__day--selected' : ''}`}
                            onClick={() => { setSelectedDate(date); setSelectedTime(null) }}
                          >
                            <span className="appt-calendar__day-date">{date.split(' ')[1]}</span>
                            <span className="appt-calendar__day-month">{date.split(' ')[0]}</span>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>

                  {selectedDate && (
                    <>
                      <p className="appt-picker__label" style={{ marginTop: 24 }}>Select a time &mdash; {selectedDate}</p>
                      <div className="appt-times">
                        {TIMES.map(t => (
                          <button
                            key={t}
                            className={`appt-time ${selectedTime === t ? 'appt-time--selected' : ''}`}
                            onClick={() => setSelectedTime(t)}
                          >
                            <Clock size={13} /> {t}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  <button
                    className="btn btn--green btn--md modal__next"
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(2)}
                  >
                    Continue <ChevronRight size={16} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <form className="appt-form" onSubmit={handleSubmit}>
                  <div className="appt-form__booking-summary">
                    <Calendar size={14} />
                    <span>{selectedDate} at {selectedTime}</span>
                    <button type="button" className="btn btn--ghost btn--sm" onClick={() => setStep(1)}>Change</button>
                  </div>

                  <div className="appt-form__field">
                    <label><User size={13} /> Full name</label>
                    <input
                      type="text"
                      placeholder="Kwame Mensah"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="appt-form__field">
                    <label><Mail size={13} /> Email address</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="appt-form__field">
                    <label><Phone size={13} /> Phone number</label>
                    <input
                      type="tel"
                      placeholder="+233 00 000 0000"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                  <div className="appt-form__field">
                    <label>Notes (optional)</label>
                    <textarea
                      placeholder="Tell us a bit about your situation — e.g. subjects, preferred schools, concerns."
                      value={form.notes}
                      onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  <button type="submit" className="btn btn--green btn--md btn--full">
                    Confirm appointment <ChevronRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </>
        ) : (
          <div className="modal__success">
            <div className="modal__success-icon">
              <CheckCircle size={32} />
            </div>
            <h3>Appointment confirmed</h3>
            <p>We have sent details to <strong>{form.email}</strong>. An advisor will reach out before your session.</p>
            <p className="modal__success-slot">{selectedDate} &middot; {selectedTime}</p>
            <button className="btn btn--outline btn--md" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  )
}
