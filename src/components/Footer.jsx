import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Sphuta. All rights reserved.
      </div>
    </footer>
  )
}

