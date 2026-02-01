import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// IMPORT YOUR OLD CSS HERE

import "./assets/css/vendors.css"
import "./assets/css/icon.css"
import "./assets/css/style.css"
import "./assets/css/business.css"
import "./assets/css/custome.css"
import "./assets/css/responsive.css"
import "./assets/css/animate.css"
import 'atropos/css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'react-circular-progressbar/dist/styles.css';







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)

