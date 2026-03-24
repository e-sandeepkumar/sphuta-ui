import React from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const imgUrl = 'https://picsum.photos/seed/hero/900/540'
  const [ref, visible] = useScrollReveal()

  return (
    <section className="hero-gradient text-white p-8 md:p-16 relative">
      {/* Floating orbs */}
      <div className="hero-orb w-64 h-64 bg-purple-400/30 top-[-60px] left-[-60px]" />
      <div className="hero-orb w-48 h-48 bg-cyan-400/20 bottom-[-40px] right-[10%]" style={{ animationDelay: '2s', animationDuration: '10s' }} />
      <div className="hero-orb w-32 h-32 bg-indigo-300/20 top-[30%] right-[30%]" style={{ animationDelay: '4s', animationDuration: '6s' }} />

      <div
        ref={ref}
        className={`container mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10 reveal ${visible ? 'is-visible' : ''}`}
      >
        {/* Text side */}
        <div className="flex-1">
          <span className="inline-block bg-white/15 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 pulse-badge tracking-wider uppercase">
            ✦ Modern Web Experiences
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Build Beautiful{' '}
            <span className="block text-cyan-300 drop-shadow-lg">Interfaces Fast</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-indigo-100 max-w-lg">
            We craft responsive, accessible, and blazing-fast UIs using React and modern tooling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="btn-shine bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-block"
            >
              View Projects →
            </Link>
            <Link
              to="/contact"
              className="btn-shine border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 inline-block"
            >
              Contact Us
            </Link>
          </div>
          {/* Stats row */}
          <div className="mt-10 flex gap-8">
            {[['50+', 'Projects'], ['99%', 'Satisfaction'], ['5★', 'Rating']].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-white">{val}</div>
                <div className="text-xs text-indigo-200 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 w-full">
          <div className="glass-card p-4 shadow-2xl relative">
            {/* Top bar dots */}
            <div className="flex gap-1.5 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <img
              alt="app preview"
              src={imgUrl}
              loading="lazy"
              className="w-full rounded-lg object-cover max-h-72 shadow-inner"
            />
            {/* Floating badge on image */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-2 text-sm font-semibold text-indigo-700 border border-indigo-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Live Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
