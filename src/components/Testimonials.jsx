import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
	{
		id: 1,
		name: 'Asha Patel',
		role: 'Product Manager',
		quote: 'Sphuta delivered an outstanding UI — fast, accessible, and beautifully designed.',
		avatar: 'https://picsum.photos/seed/t1/80',
		stars: 5,
	},
	{
		id: 2,
		name: 'Ravi Menon',
		role: 'CTO',
		quote: 'The team was responsive and the final product exceeded our expectations.',
		avatar: 'https://picsum.photos/seed/t2/80',
		stars: 5,
	},
	{
		id: 3,
		name: 'Leena Roy',
		role: 'Designer',
		quote: 'Modern components and thoughtful UX — integration was a breeze.',
		avatar: 'https://picsum.photos/seed/t3/80',
		stars: 4,
	},
]

export default function Testimonials() {
	const [titleRef, titleVisible] = useScrollReveal()
	const [gridRef, gridVisible] = useScrollReveal()

	return (
		<section className="py-16 relative overflow-hidden">
			{/* Background gradient blob */}
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 -z-10 rounded-3xl" />

			<div
				ref={titleRef}
				className={`text-center mb-12 reveal ${
					titleVisible ? 'is-visible' : ''
				}`}
			>
				<span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
					Testimonials
				</span>
				<h2 className="text-3xl font-bold gradient-text">
					What people say
				</h2>
				<p className="text-slate-500 mt-2 text-sm max-w-md mx-auto">
					Real feedback from people who've worked with us.
				</p>
			</div>

			<div
				ref={gridRef}
				className={`grid gap-6 sm:grid-cols-3 reveal-stagger reveal ${
					gridVisible ? 'is-visible' : ''
				}`}
			>
				{testimonials.map((t) => (
					<blockquote
						key={t.id}
						className="card-lift bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4 group"
					>
						{/* Stars */}
						<div className="flex gap-0.5">
							{Array.from({ length: 5 }).map((_, i) => (
								<svg
									key={i}
									className={`w-4 h-4 ${
										i < t.stars
											? 'text-amber-400'
											: 'text-slate-200'
									}`}
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
						</div>

						<p className="text-slate-700 text-sm leading-relaxed flex-1 italic">
							"{t.quote}"
						</p>

						<div className="flex items-center gap-3 pt-2 border-t border-slate-100">
							<img
								src={t.avatar}
								alt={t.name}
								loading="lazy"
								className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100"
							/>
							<div>
								<div className="font-semibold text-sm text-slate-800">
									{t.name}
								</div>
								<div className="text-xs text-slate-400">
									{t.role}
								</div>
							</div>
						</div>
					</blockquote>
				))}
			</div>
		</section>
	)
}
