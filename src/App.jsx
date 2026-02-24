import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import Pricing from './pages/Pricing'

export default function App() {
  const location = useLocation()

  return (
    // use h-screen so content area is bounded to viewport and main can scroll
    <div className="h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 min-h-0 overflow-y-auto page-wrapper w-full relative">
        {/* keyed div remounts on navigation to reliably restart the .slide-in CSS animation */}
        <div key={location.pathname} className="w-full slide-in">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}
