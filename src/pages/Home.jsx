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
      <main className="container mx-auto px-4 py-8">
        <Features />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <ProjectsPreview />
        </section>

        <LatestArticles />

        <Testimonials />
        <Newsletter />
      </main>
    </div>
  )
}
