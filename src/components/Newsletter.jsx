import React, { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [message, setMessage] = useState('')
  const [ref, visible] = useScrollReveal()

  function validateEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  }

  function onSubmit(ev) {
    ev.preventDefault()
    if (!validateEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }
    try {
      const key = 'newsletterSubscribers'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      if (!existing.includes(email)) {
        existing.push(email)
        localStorage.setItem(key, JSON.stringify(existing))
      }
      setStatus('ok')
      setMessage('🎉 Thanks for subscribing!')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Could not save subscription in this browser.')
    }
  }

  return (
    <section className="py-16">
      <div
        ref={ref}
        className={`reveal reveal--scale ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-10 md:p-14 text-white shadow-2xl`}
      >
        {/* Background orbs */}
        <div className="hero-orb absolute w-56 h-56 bg-white/10 -top-12 -right-12" />
        <div className="hero-orb absolute w-40 h-40 bg-cyan-400/15 bottom-0 left-8" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 border border-white/25 mb-6 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold">Stay in the loop</h3>
          <p className="text-indigo-200 mt-2 text-sm md:text-base">
            Get the latest projects, articles, and updates delivered to your inbox.
          </p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              aria-label="Email address"
              placeholder="you@company.com"
              className="flex-1 rounded-full border-0 px-5 py-3 text-slate-800 text-sm shadow-inner outline-none focus:ring-2 focus:ring-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="btn-shine bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Subscribe →
            </button>
          </form>

          {status === 'ok' && (
            <div className="mt-4 text-sm text-green-300 font-medium animate-pulse">{message}</div>
          )}
          {status === 'error' && (
            <div className="mt-4 text-sm text-red-300 font-medium">{message}</div>
          )}

          <p className="mt-4 text-xs text-indigo-300">No spam. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
