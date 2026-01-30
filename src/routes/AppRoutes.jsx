import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Careers from '../pages/Careers'
import Partner from '../pages/Partner'
import OngoingProjects from '../pages/OngoingProjects'
import CompletedProjects from '../pages/CompletedProjects'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/partners" element={<Partner />} />
      <Route path="/ongoing" element={<OngoingProjects />} />
      <Route path="/completed" element={<CompletedProjects />} />
    
    </Routes>
  )
}

export default AppRoutes
