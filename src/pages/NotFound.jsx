import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-slate-600">Sorry, the page you requested could not be found.</p>
      <Link to="/" className="mt-6 inline-block text-indigo-600">Go home</Link>
    </div>
  )
}

