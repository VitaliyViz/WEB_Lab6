import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Header from './components/Header/Header.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Navigation />
    <Main />
    <Footer />
  </StrictMode>,
)
