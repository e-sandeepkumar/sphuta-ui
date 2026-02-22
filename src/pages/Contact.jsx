import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const prefillSubject = params.get('subject') || ''

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState(prefillSubject)
  const [message, setMessage] = useState('')
  const [preferred, setPreferred] = useState('email')
  const [status, setStatus] = useState(null)
  const [saved, setSaved] = useState([])
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    try{
      const key = 'contactMessages'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      setSaved(existing.slice(-5).reverse())
    }catch(e){
      setSaved([])
    }
  }, [])

  useEffect(() => {
    // if URL changes and provides a new subject, update input
    if(prefillSubject) setSubject(prefillSubject)
  }, [prefillSubject])

  function validateEmail(e){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  }

  function validatePhone(p){
    // simple phone validation: digits, spaces, +, -, parentheses
    return /^[-+() 0-9]{7,20}$/.test(p)
  }

  function onSubmit(ev){
    ev.preventDefault()
    // field-level validation
    const newErrors = {}
    if(!name.trim()) newErrors.name = 'Name is required.'
    if(!validateEmail(email)) newErrors.email = 'Please enter a valid email.'
    if(preferred === 'phone' && !validatePhone(phone)) newErrors.phone = 'Please enter a valid phone number.'
    if(!message.trim()) newErrors.message = 'Message cannot be empty.'

    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors)
      setStatus({ type: 'error', text: 'Please fix the highlighted errors.' })
      return
    }

    setErrors({})
    setSubmitting(true)

    try{
      const key = 'contactMessages'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      const entry = {
        id: Date.now(),
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        subject: subject.trim(),
        preferred,
        message: message.trim(),
        createdAt: new Date().toISOString()
      }
      existing.push(entry)
      localStorage.setItem(key, JSON.stringify(existing))
      setStatus({ type: 'ok', text: 'Message saved locally. Replace this with a server endpoint to send it.' })
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      setMessage('')
      setSaved(existing.slice(-5).reverse())
    }catch(err){
      setStatus({ type: 'error', text: 'Could not save message in this browser.' })
    }finally{
      setSubmitting(false)
    }
  }

  function clearSaved(){
    try{
      localStorage.removeItem('contactMessages')
      setSaved([])
      setStatus({ type: 'ok', text: 'Cleared saved messages.' })
    }catch(e){
      setStatus({ type: 'error', text: 'Could not clear saved messages.' })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-8 grid gap-4 md:grid-cols-3 items-center">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="text-slate-600 mt-2">Have a question or want to work together? Fill out the form or use one of the other contact methods.</p>
        </div>
        <div className="hidden md:block">
          <img src="https://picsum.photos/seed/contact-hero/400/220" alt="Contact illustration" loading="lazy" className="rounded-lg shadow-sm object-cover w-full h-28" />
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Form column */}
        <form onSubmit={onSubmit} className="md:col-span-2 bg-white dark:bg-slate-800 border rounded-lg p-6 shadow-sm" noValidate>
          <div aria-live="polite" className="sr-only">{status ? status.text : ''}</div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input aria-label="Your name" className={`mt-1 block w-full rounded border ${errors.name ? 'border-red-400' : 'border-gray-200'} dark:border-slate-700 shadow-sm px-3 py-2 bg-transparent`} value={name} onChange={e => setName(e.target.value)} />
              {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
            </label>

            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input aria-label="Your email" className={`mt-1 block w-full rounded border ${errors.email ? 'border-red-400' : 'border-gray-200'} dark:border-slate-700 shadow-sm px-3 py-2 bg-transparent`} value={email} onChange={e => setEmail(e.target.value)} />
              {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            <label className="block">
              <span className="text-sm font-medium">Phone (optional)</span>
              <input aria-label="Your phone" className={`mt-1 block w-full rounded border ${errors.phone ? 'border-red-400' : 'border-gray-200'} dark:border-slate-700 shadow-sm px-3 py-2 bg-transparent`} value={phone} onChange={e => setPhone(e.target.value)} />
              {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
            </label>

            <label className="block">
              <span className="text-sm font-medium">Subject</span>
              <input aria-label="Subject" placeholder="Optional subject" className="mt-1 block w-full rounded border-gray-200 dark:border-slate-700 shadow-sm px-3 py-2 bg-transparent" value={subject} onChange={e => setSubject(e.target.value)} />
            </label>
          </div>

          <label className="block mt-4">
            <span className="text-sm font-medium">Preferred contact method</span>
            <select aria-label="Preferred contact method" className="mt-1 block w-full rounded border-gray-200 dark:border-slate-700 shadow-sm px-3 py-2 bg-transparent" value={preferred} onChange={e => setPreferred(e.target.value)}>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium">Message</span>
            <textarea aria-label="Message" className={`mt-1 block w-full rounded border ${errors.message ? 'border-red-400' : 'border-gray-200'} dark:border-slate-700 shadow-sm px-3 py-2 bg-transparent`} rows={6} value={message} onChange={e => setMessage(e.target.value)}></textarea>
            {errors.message && <div className="text-red-600 text-sm mt-1">{errors.message}</div>}
          </label>

          <div className="mt-4 flex items-center gap-3">
            <button className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-60" type="submit" disabled={submitting}>
              {submitting && (
                <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              )}
              {submitting ? 'Sending...' : 'Send message'}
            </button>
            <button type="button" onClick={clearSaved} className="bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded">Clear saved</button>
            {status && (
              <div role="status" aria-live="polite" className={`ml-3 text-sm ${status.type === 'ok' ? 'text-green-600' : 'text-red-600'}`}>{status.text}</div>
            )}
          </div>
        </form>

        {/* Contact methods / details column */}
        <aside className="space-y-6">
          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold">Other ways to reach us</h3>
            <p className="text-sm text-slate-600 mt-2">Email: <a className="text-indigo-600" href="mailto:hello@sphuta.net">hello@sphuta.net</a></p>
            <p className="text-sm text-slate-600">Phone: <a className="text-indigo-600" href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p className="text-sm text-slate-600 mt-2">Office hours: Mon–Fri, 9am–6pm</p>
          </div>

          <div className="bg-white dark:bg-slate-800 border rounded-lg p-0 overflow-hidden shadow-sm">
            <img src="https://picsum.photos/seed/contact-map/600/360" alt="Map placeholder" loading="lazy" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Visit our office</h4>
              <p className="text-sm text-slate-600">123 Sphuta Street<br />City, Country</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-2">Recent (local) messages</h4>
            {saved.length === 0 && <p className="text-sm text-slate-600">No messages saved locally yet.</p>}
            <ul className="space-y-3 mt-3">
              {saved.map(s => (
                <li key={s.id} className="border rounded p-3 bg-white dark:bg-slate-900">
                  <div className="text-sm font-semibold">{s.name} — <span className="text-slate-500">{s.email}</span></div>
                  {s.phone && <div className="text-sm text-slate-500">Phone: {s.phone}</div>}
                  {s.subject && <div className="text-sm text-slate-500">Subject: {s.subject}</div>}
                  <div className="text-sm text-slate-600 mt-1">{s.message}</div>
                  <div className="text-xs text-slate-400 mt-2">{new Date(s.createdAt).toLocaleString()}</div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
