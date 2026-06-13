import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Results from './pages/Results'
import Services from './pages/Services'
import HowItWorks from './pages/HowItWorks'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'
import AppointmentModal from './components/AppointmentModal'
import CheckerModal from './components/CheckerModal'

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [checkerOpen, setCheckerOpen] = useState(false)

  return (
    <BrowserRouter>
      <Navbar onBookAppointment={() => setAppointmentOpen(true)} />
      <Routes>
        <Route path="/" element={<Landing onBookAppointment={() => setAppointmentOpen(true)} onBuyChecker={() => setCheckerOpen(true)} />} />
        <Route path="/results" element={<Results />} />
        <Route path="/services" element={<Services onBookAppointment={() => setAppointmentOpen(true)} onBuyChecker={() => setCheckerOpen(true)} />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footer />
      {appointmentOpen && <AppointmentModal onClose={() => setAppointmentOpen(false)} />}
      {checkerOpen && <CheckerModal onClose={() => setCheckerOpen(false)} />}
    </BrowserRouter>
  )
}
