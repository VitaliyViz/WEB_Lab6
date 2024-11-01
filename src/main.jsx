import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss'
import Header from './components/Header/Header.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import Catalog from './components/Catalog/Catalog.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
