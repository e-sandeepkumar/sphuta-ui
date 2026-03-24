import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 min-h-0 overflow-y-auto page-wrapper w-full relative">
        {children}
        <Footer />
      </main>
    </div>
  )
}
