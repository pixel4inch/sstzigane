import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// IMPORT YOUR OLD CSS HERE

import "./assets/css/business.css"
import "./assets/css/custome.css"
import "./assets/css/icon.css"
import "./assets/css/responsive.css"
import "./assets/css/style.css"
import "./assets/css/vendors.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

