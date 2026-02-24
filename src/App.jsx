import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import Pricing from './pages/Pricing'
import Layout from './components/Layout'

export default function App() {
  const location = useLocation()

  return (
    // Use the reusable Layout component (Header + main scroll container + Footer)
    <Layout>
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
    </Layout>
  )
}
