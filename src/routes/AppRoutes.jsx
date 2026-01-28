import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Careers from '../pages/Careers'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Careers" element={<Careers />} />
    
    </Routes>
  )
}

export default AppRoutes
