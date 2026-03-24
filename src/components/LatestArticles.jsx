import React from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const articles = [
  { id: 1, title: 'Designing for speed', excerpt: 'Tips for optimizing perceived performance in your apps.', img: 'https://picsum.photos/seed/article1/480/300', tag: 'Performance', readTime: '4 min' },
  { id: 2, title: 'Accessible components', excerpt: 'Small changes that make big accessibility improvements.', img: 'https://picsum.photos/seed/article2/480/300', tag: 'A11y', readTime: '6 min' },
  { id: 3, title: 'Tailwind workflow', excerpt: 'How to structure styles for scalability with Tailwind.', img: 'https://picsum.photos/seed/article3/480/300', tag: 'CSS', readTime: '5 min' },
]

export default function LatestArticles() {
  const [titleRef, titleVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section className="py-16">
      <div ref={titleRef} className={`mb-10 reveal reveal--left ${titleVisible ? 'is-visible' : ''}`}>
        <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase">
          From the blog
        </span>
        <h2 className="text-3xl font-bold gradient-text">Latest Articles</h2>
      </div>

      <div
        ref={gridRef}
        className={`grid gap-6 sm:grid-cols-3 reveal-stagger reveal ${gridVisible ? 'is-visible' : ''}`}
      >
        {articles.map((a) => (
          <article key={a.id} className="card-lift border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm group flex flex-col">
            {/* Image */}
            <div className="w-full h-44 img-zoom relative">
              <img src={a.img} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
              <span className="absolute top-3 right-3 bg-white/90 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                {a.tag}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-200">{a.title}</h3>
              <p className="text-sm text-slate-500 mt-2 flex-1 leading-relaxed">{a.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">⏱ {a.readTime} read</span>
                <Link to="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors group-hover:underline">
                  Read →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
