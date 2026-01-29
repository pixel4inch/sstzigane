import { useState } from 'react'

// COMPONENTS

import Header from './components/common/Header'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/common/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <AppRoutes/>
     <Footer/>
      
    </>
  )
}

export default App
