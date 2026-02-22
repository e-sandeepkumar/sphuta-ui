import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    priceMonthly: 19,
    features: ['1 project', 'Email support', 'Basic analytics']
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonthly: 49,
    features: ['Up to 5 projects', 'Priority email support', 'Advanced analytics']
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceMonthly: 149,
    features: ['Unlimited projects', 'Phone & email support', 'Dedicated account manager']
  }
]

export default function Pricing(){
  const [billing, setBilling] = useState('monthly') // or 'yearly'
  const price = (p) => billing === 'monthly' ? p.priceMonthly : p.priceMonthly * 10 // yearly ~ 2 months free

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>
      <p className="text-slate-600 mb-6">Choose a plan that fits your needs. Contact us for enterprise options.</p>

      <div className="mb-6">
        <label className="inline-flex items-center mr-4">
          <input type="radio" name="billing" checked={billing === 'monthly'} onChange={() => setBilling('monthly')} className="mr-2" />
          Monthly
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="billing" checked={billing === 'yearly'} onChange={() => setBilling('yearly')} className="mr-2" />
          Yearly (save ~2 months)
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {plans.map(p => (
          <div key={p.id} className="border rounded-lg p-6 flex flex-col bg-white shadow-sm">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="mt-4 text-3xl font-bold">${price(p)} <span className="text-base font-medium text-slate-500">/ {billing}</span></div>
            <ul className="mt-4 space-y-2 flex-1">
              {p.features.map((f, i) => <li key={i} className="text-slate-600">• {f}</li>)}
            </ul>
            <div className="mt-6">
              <Link to={`/contact?subject=${encodeURIComponent(`Interested in ${p.name} plan`)}`} className="inline-block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded">Get Started</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

