import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Legismap from './legismap.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Legismap />
  </StrictMode>,
)
