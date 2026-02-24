import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    // Overall layout keeps header sticky, main as the single scroll container, and footer at the bottom
    <div className="h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 min-h-0 overflow-y-auto page-wrapper w-full relative">
        {children}
      </main>
      <Footer />
    </div>
  )
}

