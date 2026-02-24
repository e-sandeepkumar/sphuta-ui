import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
	{
		id: 'basic',
		name: 'Basic',
		priceMonthly: 19,
		features: ['1 project', 'Email support', 'Basic analytics'],
		imgSeed: 'pricing-basic'
	},
	{
		id: 'pro',
		name: 'Pro',
		priceMonthly: 49,
		features: ['Up to 5 projects', 'Priority email support', 'Advanced analytics'],
		imgSeed: 'pricing-pro'
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		priceMonthly: 149,
		features: ['Unlimited projects', 'Phone & email support', 'Dedicated account manager'],
		imgSeed: 'pricing-enterprise'
	}
]

function formatPrice(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default function Pricing() {
	const [billing, setBilling] = useState('monthly') // 'monthly' or 'yearly'

	// yearly gives roughly 2 months free: yearly = monthly * 10 (same as before)
	const calcPrice = (p) => billing === 'monthly' ? p.priceMonthly : p.priceMonthly * 10

	return (
		<div className="container mx-auto px-8 py-20"> {/* increased padding */}
			<header className="text-center max-w-4xl mx-auto mb-16">
				<h1 className="text-6xl md:text-7xl font-extrabold leading-tight">Pricing that scales with you</h1>
				<p className="text-xl md:text-2xl text-slate-600 mt-6">Simple, predictable pricing for teams and businesses. Try any plan risk-free and upgrade anytime.</p>

				<div className="mt-10 inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden shadow-sm">
					<button
						onClick={() => setBilling('monthly')}
						className={`px-8 py-4 ${billing === 'monthly' ? 'bg-white dark:bg-slate-800 shadow-inner font-semibold' : 'text-slate-600 dark:text-slate-300'}`}>
						Monthly
					</button>
					<button
						onClick={() => setBilling('yearly')}
						className={`px-8 py-4 ${billing === 'yearly' ? 'bg-white dark:bg-slate-800 shadow-inner font-semibold' : 'text-slate-600 dark:text-slate-300'}`}>
						Yearly (save 2 months)
					</button>
				</div>
			</header>

			<div className="grid gap-10 sm:grid-cols-3"> {/* increased gap */}
				{plans.map(p => {
					const price = calcPrice(p)
					const monthlyEquivalent = billing === 'monthly' ? price : Math.round(price / 12)
					const isPopular = p.id === 'pro'
					return (
						<section key={p.id} className={`relative border rounded-2xl p-10 flex flex-col bg-white dark:bg-slate-800 shadow-xl ${isPopular ? 'scale-[1.03] border-indigo-200' : ''}`}>
							{isPopular && <div className="absolute -top-5 left-8 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most popular</div>}

							<div className="h-56 md:h-64 mb-6 overflow-hidden rounded-lg"> {/* taller image */}
								<img src={`https://picsum.photos/seed/${p.imgSeed}/1600/900`} alt={`${p.name} illustration`} loading="lazy" className="w-full h-full object-cover" />
							</div>

							<h3 className="text-3xl font-semibold mb-3">{p.name}</h3>

							<div className="mt-3">
								<span className="text-6xl md:text-7xl font-extrabold">${formatPrice(price)}</span>
								<span className="text-lg md:text-xl text-slate-500 ml-4"> / {billing}</span>
							</div>

							<div className="text-lg text-slate-500 mt-3">(~${monthlyEquivalent}/mo equivalent)</div>

							<ul className="mt-8 space-y-4 flex-1 text-lg"> {/* larger feature text and spacing */}
								{p.features.map((f, i) => (
									<li key={i} className="text-slate-800 dark:text-slate-200 flex items-start gap-4">
										<svg className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7.5 11.672 4.707 8.879a1 1 0 10-1.414 1.414l3.5 3.5a1 1 0 001.414 0l8-8z" clipRule="evenodd"/></svg>
										<span>{f}</span>
									</li>
								))}
							</ul>

							<div className="mt-10">
								<Link to={`/contact?subject=${encodeURIComponent(`Interested in ${p.name} plan`)}`} className={`inline-block w-full text-center px-8 py-4 rounded-xl text-xl font-semibold ${isPopular ? 'bg-indigo-700 text-white' : 'bg-indigo-600 text-white'}`}>Get Started</Link>
							</div>

							<div className="mt-6 text-base text-slate-400">No credit card required to try.</div>
						</section>
					)
				})}
			</div>

			<section className="mt-20 max-w-6xl mx-auto">
				<h2 className="text-4xl font-semibold mb-8">Compare features</h2>
				<div className="overflow-x-auto border rounded-lg">
					<table className="w-full table-fixed text-lg"> {/* larger table text and spacing */}
						<thead className="bg-slate-50 dark:bg-slate-700">
							<tr>
								<th className="p-6 text-left">Feature</th>
								{plans.map(p => <th key={p.id} className="p-6 text-center">{p.name}</th>)}
							</tr>
						</thead>
						<tbody>
							{Array.from(new Set(plans.flatMap(p => p.features))).map((feat, i) => (
								<tr key={i} className="border-t">
									<td className="p-6 align-top">{feat}</td>
									{plans.map(p => (
										<td key={p.id} className="p-6 text-center align-top">{p.features.includes(feat) ? '✓' : ''}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	)
}
