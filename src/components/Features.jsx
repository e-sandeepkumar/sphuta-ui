import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const features = [
	{
		id: 1,
		title: 'Fast Performance',
		desc: 'Optimized builds and snappy UIs using Vite and React.',
		color: 'from-indigo-500 to-violet-500',
		icon: (
			<svg
				className="w-7 h-7 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
	},
	{
		id: 2,
		title: 'Responsive Design',
		desc: 'Built mobile-first with Tailwind so layouts look great everywhere.',
		color: 'from-cyan-500 to-blue-500',
		icon: (
			<svg
				className="w-7 h-7 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
	},
	{
		id: 3,
		title: 'Accessible',
		desc: 'Focus on semantic markup and keyboard navigation for all users.',
		color: 'from-emerald-500 to-teal-500',
		icon: (
			<svg
				className="w-7 h-7 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		id: 4,
		title: 'Dark Mode Ready',
		desc: 'First-class dark mode support for a comfortable experience.',
		color: 'from-slate-600 to-slate-800',
		icon: (
			<svg
				className="w-7 h-7 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		),
	},
	{
		id: 5,
		title: 'Component Library',
		desc: 'Rich set of reusable, composable UI components out of the box.',
		color: 'from-pink-500 to-rose-500',
		icon: (
			<svg
				className="w-7 h-7 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
				/>
			</svg>
		),
	},
	{
		id: 6,
		title: 'Analytics Built-in',
		desc: 'Track usage and performance metrics with zero extra setup.',
		color: 'from-orange-500 to-amber-500',
		icon: (
			<svg
				className="w-7 h-7 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
	},
]

export default function Features() {
	const [titleRef, titleVisible] = useScrollReveal()
	const [gridRef, gridVisible] = useScrollReveal()

	return (
		<section className="relative py-16 dot-pattern">
			{/* Section title */}
			<div
				ref={titleRef}
				className={`text-center mb-12 reveal ${
					titleVisible ? 'is-visible' : ''
				}`}
			>
				<span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
					What we offer
				</span>
				<h2 className="text-3xl font-bold gradient-text">
					Powerful Features
				</h2>
				<p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">
					Everything you need to ship a world-class product, right out of the
					box.
				</p>
			</div>

			{/* Grid */}
			<div
				ref={gridRef}
				className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger reveal ${
					gridVisible ? 'is-visible' : ''
				}`}
			>
				{features.map((f) => (
					<div
						key={f.id}
						className="card-lift bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4 group"
					>
						{/* Icon bubble */}
						<div
							className={`icon-glow w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-md`}
						>
							{f.icon}
						</div>
						<div>
							<h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-200">
								{f.title}
							</h3>
							<p className="text-sm text-slate-500 mt-1 leading-relaxed">
								{f.desc}
							</p>
						</div>
						{/* Bottom accent bar */}
						<div
							className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${f.color} rounded-full transition-all duration-500 mt-auto`}
						/>
					</div>
				))}
			</div>
		</section>
	)
}
