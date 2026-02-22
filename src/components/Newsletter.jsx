import React, { useState } from 'react'

export default function Newsletter(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // 'ok' | 'error'
  const [message, setMessage] = useState('')

  function validateEmail(e){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  }

  function onSubmit(ev){
    ev.preventDefault()
    if(!validateEmail(email)){
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    try{
      const key = 'newsletterSubscribers'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      if(!existing.includes(email)){
        existing.push(email)
        localStorage.setItem(key, JSON.stringify(existing))
      }
      setStatus('ok')
      setMessage('Thanks for subscribing!')
      setEmail('')
    }catch(err){
      setStatus('error')
      setMessage('Could not save subscription in this browser.')
    }
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-slate-50 border rounded-lg p-6">
        <h3 className="text-xl font-semibold">Subscribe to our newsletter</h3>
        <p className="text-sm text-slate-600 mt-2">Get updates about new projects and articles.</p>
        <form onSubmit={onSubmit} className="mt-4 flex gap-2">
          <input
            type="email"
            aria-label="Email address"
            placeholder="you@company.com"
            className="flex-1 rounded border px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Subscribe</button>
        </form>
        {status === 'ok' && <div className="mt-3 text-sm text-green-600">{message}</div>}
        {status === 'error' && <div className="mt-3 text-sm text-red-600">{message}</div>}
      </div>
    </section>
  )
}

