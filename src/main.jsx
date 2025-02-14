import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/Landingpage.jsx'
import Mainpage from './pages/Mainpage.jsx'
import Jobinfopage from './pages/Jobinfopage.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
