import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import './index.css'
import App from './App.jsx'
import NavBar from './components/shared/NavBar.jsx'
import Footer from './components/shared/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <NavBar />
    <App />
    <Footer />
    </BrowserRouter>
  </StrictMode>,
)
