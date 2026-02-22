import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark' }
    catch { return false }
  })

  useEffect(() => {
    const root = document.documentElement
    if(dark) root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  return (
    <header className="bg-white dark:bg-slate-800 border-b relative">
      <a href="#main-content" className="absolute left-4 -top-12 focus:top-4 focus:left-4 bg-white dark:bg-slate-900 text-indigo-600 px-3 py-2 rounded shadow z-50">Skip to content</a>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-slate-800 dark:text-slate-100">Sphuta</Link>
        <nav className="space-x-4 hidden md:block">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-300'}>Home</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-300'}>Projects</NavLink>
          <NavLink to="/pricing" className={({isActive}) => isActive ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-300'}>Pricing</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-indigo-600' : 'text-slate-600 dark:text-slate-300'}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
            onClick={() => setDark(d => !d)}
            className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm8 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM15.78 4.22a1 1 0 010 1.42l-.7.7A1 1 0 1113.66 5.3l.7-.7a1 1 0 011.42 0zM17 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1zM4.22 15.78a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM15.78 15.78a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 116.707 2.707 8 8 0 0017.293 13.293z"/></svg>
            )}
          </button>

          <div className="md:hidden">
            {/* simple mobile menu placeholder */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  return (
    <details className="relative">
      <summary className="cursor-pointer">Menu</summary>
      <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 border rounded shadow p-2">
        <nav className="flex flex-col gap-2">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </details>
  )
}
