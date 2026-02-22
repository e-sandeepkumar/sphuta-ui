import React from 'react'
import { Link } from 'react-router-dom'

const articles = [
  { id: 1, title: 'Designing for speed', excerpt: 'Tips for optimizing perceived performance in your apps.', img: 'https://picsum.photos/seed/article1/480/300' },
  { id: 2, title: 'Accessible components', excerpt: 'Small changes that make big accessibility improvements.', img: 'https://picsum.photos/seed/article2/480/300' },
  { id: 3, title: 'Tailwind workflow', excerpt: 'How to structure styles for scalability with Tailwind.', img: 'https://picsum.photos/seed/article3/480/300' },
]

export default function LatestArticles(){
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Latest articles</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {articles.map(a => (
          <article key={a.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="w-full h-40 overflow-hidden">
              <img src={a.img} alt={a.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{a.excerpt}</p>
              <div className="mt-4">
                <Link to="#" className="text-indigo-600">Read →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

