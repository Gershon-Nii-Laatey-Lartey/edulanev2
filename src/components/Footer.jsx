import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            edulane®
          </div>
          <p className="footer__tagline">
            From WASSCE results to university acceptance — we handle the entire journey.
          </p>
          <p className="footer__legal">
            &copy; {new Date().getFullYear()} EduLane. All rights reserved.
          </p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__col-title">Platform</h4>
            <ul>
              <li><Link to="/">Check results</Link></li>
              <li><Link to="/how-it-works">How it works</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul>
              <li><a href="#">Buy WASSCE checker</a></li>
              <li><a href="#">University matching</a></li>
              <li><a href="#">Full admissions</a></li>
              <li><a href="#">Book appointment</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul>
              <li><a href="mailto:hello@edulane.gh">hello@edulane.gh</a></li>
              <li><a href="tel:+233000000000">+233 00 000 0000</a></li>
              <li><span className="footer__location">Accra, Ghana</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Built for Ghanaian students, by people who know the system.</p>
      </div>
    </footer>
  )
}
