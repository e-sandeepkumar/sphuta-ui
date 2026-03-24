import React from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Footer() {
  const [ref, visible] = useScrollReveal({ threshold: 0.05 })

  return (
    <footer
      ref={ref}
      className={`footer-reveal bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ${visible ? 'is-visible' : ''}`}
    >
      {/* Top wave */}
      <div className="wave-divider -mb-1">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="40">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-3 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg tracking-tight">Sphuta</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Modern, accessible, and blazing-fast web experiences built with React.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {['twitter', 'github', 'linkedin'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-indigo-500 flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" opacity="0.4" />
                    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/projects', 'Projects'], ['/pricing', 'Pricing'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:pl-1 inline-block"
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-slate-300 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📧 hello@sphuta.io</li>
              <li>📍 Bengaluru, India</li>
              <li>🕐 Mon–Fri, 9am–6pm IST</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Sphuta. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
