import React from 'react'
import Hero from '../components/Hero'
import ProjectsPreview from '../components/ProjectsPreview'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import LatestArticles from '../components/LatestArticles'

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Wave divider between hero and content */}
      <div className="wave-divider bg-gradient-to-r from-indigo-600 to-violet-600 -mt-1">
        <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="50">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <main className="container mx-auto px-4">
        <Features />

        <section className="mt-4">
          <div className="mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
              Our Work
            </span>
            <h2 className="text-3xl font-bold gradient-text">Featured Projects</h2>
          </div>
          <ProjectsPreview />
        </section>

        <LatestArticles />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  )
}
