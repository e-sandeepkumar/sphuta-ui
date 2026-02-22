import React from 'react'

const testimonials = [
	{
		id: 1,
		name: 'Asha Patel',
		role: 'Product Manager',
		quote: 'Sphuta delivered an outstanding UI — fast, accessible, and beautifully designed.',
		avatar: 'https://picsum.photos/seed/t1/80',
	},
	{
		id: 2,
		name: 'Ravi Menon',
		role: 'CTO',
		quote: 'The team was responsive and the final product exceeded our expectations.',
		avatar: 'https://picsum.photos/seed/t2/80',
	},
	{
		id: 3,
		name: 'Leena Roy',
		role: 'Designer',
		quote: 'Modern components and thoughtful UX — integration was a breeze.',
		avatar: 'https://picsum.photos/seed/t3/80',
	},
]

export default function Testimonials() {
	return (
		<section className="container mx-auto px-4 py-12">
			<h2 className="text-2xl font-semibold mb-6">What people say</h2>
			<div className="grid gap-6 sm:grid-cols-3">
				{testimonials.map((t) => (
					<blockquote
						key={t.id}
						className="border rounded-lg p-4 bg-white shadow-sm"
					>
						<div className="flex items-center gap-3">
							<img
								src={t.avatar}
								alt={t.name}
								loading="lazy"
								className="w-12 h-12 rounded-full object-cover"
							/>
							<div>
								<div className="font-semibold">{t.name}</div>
								<div className="text-sm text-slate-500">{t.role}</div>
							</div>
						</div>
						<p className="mt-4 text-slate-700">“{t.quote}”</p>
					</blockquote>
				))}
			</div>
		</section>
	)
}
