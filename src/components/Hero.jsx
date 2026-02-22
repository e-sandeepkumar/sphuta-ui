import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  // Use a seeded random image from picsum for consistent placeholders
  const imgUrl = 'https://picsum.photos/seed/hero/900/540'
  return (
    <section className="rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-8 md:p-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold">Sphuta — Modern web experiences</h1>
          <p className="mt-4 text-lg md:text-xl text-indigo-100">We build responsive, accessible, and fast user interfaces using React and modern tooling.</p>
          <div className="mt-6">
            <Link to="/projects" className="bg-white text-indigo-600 px-4 py-2 rounded mr-3">View Projects</Link>
            <Link to="/contact" className="border border-white text-white px-4 py-2 rounded">Contact Us</Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white/10 rounded-lg p-6 shadow-lg">
            <img alt="app preview" src={imgUrl} loading="lazy" className="w-full rounded object-cover max-h-72" />
          </div>
        </div>
      </div>
    </section>
  )
}
