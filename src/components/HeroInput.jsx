import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Upload, PenLine, ChevronRight, ArrowRight } from 'lucide-react'
import './HeroInput.css'

const MODES = [
  { id: 'index', label: 'Index number', icon: Search },
  { id: 'upload', label: 'Upload results', icon: Upload },
  { id: 'manual', label: 'Enter manually', icon: PenLine },
]

export default function HeroInput() {
  const [mode, setMode] = useState('index')
  const [value, setValue] = useState('')
  const [file, setFile] = useState(null)
  const [focused, setFocused] = useState(false)
  const fileRef = useRef(null)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (mode === 'index' && value.trim()) {
      navigate(`/results?index=${encodeURIComponent(value.trim())}`)
    } else if (mode === 'upload' && file) {
      navigate('/results?method=upload')
    } else if (mode === 'manual') {
      navigate('/results?method=manual')
    }
  }

  function handleFileChange(e) {
    const f = e.target.files?.[0]
    if (f) { setFile(f); navigate('/results?method=upload') }
  }

  return (
    <div className="hero-input">
      {/* Mode tabs */}
      <div className="hero-input__tabs" role="tablist">
        {MODES.map(m => {
          const Icon = m.icon
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={mode === m.id}
              className={`hero-input__tab ${mode === m.id ? 'hero-input__tab--active' : ''}`}
              onClick={() => { setMode(m.id); setValue(''); setFile(null) }}
            >
              <Icon size={13} />
              {m.label}
            </button>
          )
        })}
      </div>

      {/* Input bar */}
      <form
        className={`hero-input__bar ${focused ? 'hero-input__bar--focused' : ''}`}
        onSubmit={handleSubmit}
      >
        {mode === 'index' && (
          <>
            <Search size={18} className="hero-input__icon" />
            <input
              className="hero-input__field"
              type="text"
              placeholder="Enter your index number  e.g. 1234567890"
              value={value}
              onChange={e => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              autoFocus
            />
          </>
        )}

        {mode === 'upload' && (
          <>
            <Upload size={18} className="hero-input__icon" />
            <span className="hero-input__field hero-input__field--placeholder" onClick={() => fileRef.current?.click()}>
              {file ? file.name : 'Click to upload your WASSCE result slip (PDF or image)'}
            </span>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf,image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </>
        )}

        {mode === 'manual' && (
          <>
            <PenLine size={18} className="hero-input__icon" />
            <span className="hero-input__field hero-input__field--placeholder">
              Enter grades manually — step by step
            </span>
          </>
        )}

        <button
          type="submit"
          className="hero-input__submit"
          onClick={mode === 'upload' ? () => fileRef.current?.click() : undefined}
        >
          <span className="hero-input__submit-text">
            {mode === 'index' ? 'Find matches' : mode === 'upload' ? 'Upload' : 'Continue'}
          </span>
          <ArrowRight size={16} />
        </button>
      </form>

      <p className="hero-input__hint">
        Free to use &mdash; we match you to programmes based on your actual grades and cutoff points.
      </p>
    </div>
  )
}
