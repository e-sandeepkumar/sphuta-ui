import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark' }
    catch { return false }
  })
  const [mobileOpen, setMobileOpen] = useState(false)
  // Controlled open state for Features submenu to support smooth slide/fade and keyboard accessibility
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const navRef = useRef(null)
  const underlineRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  useEffect(() => {
    // position underline on route change (active link)
    const nav = navRef.current
    if (!nav) return
    const active = nav.querySelector('.nav-link[aria-current="page"]')
    moveUnderlineTo(active)
  }, [location])

  useEffect(() => {
    const handleResize = () => {
      const nav = navRef.current
      if (!nav) return
      const active = nav.querySelector('.nav-link[aria-current="page"]')
      moveUnderlineTo(active)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const links = Array.from(nav.querySelectorAll('.nav-link'))

    function onEnter(e){
      moveUnderlineTo(e.currentTarget)
    }
    function onLeave(){
      const active = nav.querySelector('.nav-link[aria-current="page"]')
      moveUnderlineTo(active)
    }

    links.forEach(l => {
      l.addEventListener('mouseenter', onEnter)
      l.addEventListener('focus', onEnter)
    })
    nav.addEventListener('mouseleave', onLeave)

    return () => {
      links.forEach(l => {
        l.removeEventListener('mouseenter', onEnter)
        l.removeEventListener('focus', onEnter)
      })
      nav.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  useEffect(() => {
    // Debug: log featuresOpen to the console so you can verify the toggle when hovering/clicking
    try { console.debug('featuresOpen ->', featuresOpen) } catch(e) {}
  }, [featuresOpen])

  function moveUnderlineTo(el){
    const ul = underlineRef.current
    const nav = navRef.current
    if (!ul || !nav) return
    if (!el){
      ul.style.opacity = '0'
      return
    }
    const navRect = nav.getBoundingClientRect()
    // Prefer the label's rect (so underline sits under the text) otherwise use the element rect
    const label = el.querySelector ? el.querySelector('.nav-label') : null
    const rect = (label && label.getBoundingClientRect) ? label.getBoundingClientRect() : el.getBoundingClientRect()
    const left = rect.left - navRect.left
    const width = rect.width
    // Place underline exactly at the label's bottom so it appears directly under the menu text
    const top = rect.bottom - navRect.top
    // Position underline using `left` and `top` for direct alignment; width and opacity remain animated
    ul.style.left = `${left}px`
    ul.style.width = `${width}px`
    ul.style.top = `${top}px`
    ul.style.opacity = '1'
  }

  // Make nav links full-height and inline-flex so anchors and the Features button share the same box model
  // Add cursor-pointer so interactive items show the pointer cursor
  const linkBase = 'nav-link inline-flex items-center h-full whitespace-nowrap text-base md:text-lg px-2 md:px-3 font-medium leading-none cursor-pointer'
  // Remove bottom padding from active link (we use the moving underline) to keep all links on the same line
  const activeClass = 'text-slate-900 dark:text-white'
  const inactiveClass = 'text-slate-700 dark:text-slate-300 hover:text-slate-900'

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900">
      {/* fixed inner header height ensures h-full nav links line up exactly */}
      <div className="container mx-auto px-6 h-28 flex items-center justify-between">
        {/* Logo left */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/favicon.svg" alt="Sphuta" className="h-10 w-auto" />
        </Link>

        {/* Nav right */}
        <nav ref={navRef} className="hidden md:flex md:items-center md:gap-4 whitespace-nowrap relative h-full" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : inactiveClass}`} end>
            <span className="nav-label">Home</span>
          </NavLink>

          <div
             className="relative inline-flex items-center h-full"
             onMouseEnter={() => setFeaturesOpen(true)}
             onMouseLeave={() => setFeaturesOpen(false)}
             onFocus={() => setFeaturesOpen(true)}
             onBlur={() => setFeaturesOpen(false)}
             onKeyDown={(e) => { if (e.key === 'Escape') setFeaturesOpen(false) }}
           >
             <button className={`${linkBase} ${inactiveClass} gap-1`} aria-haspopup="true" aria-expanded={featuresOpen} onClick={() => setFeaturesOpen(v => !v)}>
               {/* Features text, arrow sits to the right */}
               <span className="nav-label">Features</span>

               {/* Arrow wrapper: fixed-size so chevrons overlap and switching opacity doesn't shift layout */}
               <span className="relative inline-block w-3 h-3 ml-2">
                {/* Up chevron (closed) */}
                <svg className={`absolute inset-0 w-3 h-3 transition-opacity duration-150 ${featuresOpen ? 'opacity-0' : 'opacity-100'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 12l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {/* Down chevron (open) */}
                <svg className={`absolute inset-0 w-3 h-3 transition-opacity duration-150 ${featuresOpen ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </button>
            {/* place submenu just below the header (top-full) and use a larger upward offset when closed to animate downward */}
            <div className={`absolute right-0 top-full mt-0 w-48 bg-white dark:bg-slate-800 border rounded shadow-md z-50 transform transition-opacity transition-transform duration-250 delay-75 ease-out ${featuresOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-6 pointer-events-none'}`}>
                <Link to="/features" onClick={() => setFeaturesOpen(false)} className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">Overview</Link>
                <Link to="/features#ux" onClick={() => setFeaturesOpen(false)} className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">UX</Link>
                <Link to="/features#security" onClick={() => setFeaturesOpen(false)} className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">Security</Link>
              </div>
          </div>

          <NavLink to="/pricing" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>
            <span className="nav-label">Pricing</span>
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : inactiveClass}`}>
            <span className="nav-label">Contact</span>
          </NavLink>

          {/* underline element: positioned via JS (set top) so it sits right under each link's bottom */}
          <span ref={underlineRef} className="absolute left-0 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 opacity-0" aria-hidden="true" style={{top: '0px'}}></span>
        </nav>

        {/* Right controls: minimal */}
        <div className="flex items-center gap-3">
          <button onClick={() => setDark(d => !d)} className="hidden">Theme</button>

          <button className="md:hidden p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700" onClick={() => setMobileOpen(o => !o)} aria-expanded={mobileOpen} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-200 ${mobileOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-6 pb-6">
          <nav className="flex flex-col gap-3 py-4">
            <NavLink to="/" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-slate-800">Home</NavLink>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer text-base font-medium text-slate-800">Features
                <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </summary>
              <div className="mt-2 pl-4 flex flex-col gap-2">
                <Link to="/features" onClick={() => setMobileOpen(false)} className="text-slate-700">Overview</Link>
                <Link to="/features#ux" onClick={() => setMobileOpen(false)} className="text-slate-700">UX</Link>
                <Link to="/features#security" onClick={() => setMobileOpen(false)} className="text-slate-700">Security</Link>
              </div>
            </details>
            <NavLink to="/pricing" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-slate-800">Pricing</NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-slate-800">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
