import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import Pricing from './pages/Pricing'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
