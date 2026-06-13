import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar({ onBookAppointment }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/how-it-works', label: 'How it works' },
    { to: '/services', label: 'Services' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          edulane®
        </Link>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="btn btn--green btn--sm" onClick={onBookAppointment}>
            Book appointment ↗
          </button>
        </div>

        <button className="navbar__burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__mobile-link ${location.pathname === l.to ? 'navbar__mobile-link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <button className="btn btn--green btn--full" onClick={() => { onBookAppointment(); setMenuOpen(false) }}>
            Book appointment ↗
          </button>
        </div>
      )}
    </nav>
  )
}
