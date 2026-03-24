import React from 'react'
import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const items = [
  { id: 1, title: 'Project One', desc: 'A cutting-edge dashboard with real-time data and smooth animations.', tag: 'Dashboard' },
  { id: 2, title: 'Project Two', desc: 'E-commerce platform with seamless checkout and responsive design.', tag: 'E-Commerce' },
  { id: 3, title: 'Project Three', desc: 'Portfolio site with custom animations and pixel-perfect layout.', tag: 'Portfolio' },
]

export default function ProjectsPreview() {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger reveal ${visible ? 'is-visible' : ''}`}
    >
      {items.map((it) => {
        const img = `https://picsum.photos/seed/project-${it.id}/480/320`
        return (
          <div key={it.id} className="card-lift border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col bg-white group">
            {/* Image with zoom */}
            <div className="w-full h-44 img-zoom relative">
              <img src={img} alt={it.title} loading="lazy" className="w-full h-full object-cover" />
              {/* Tag badge */}
              <span className="absolute top-3 left-3 bg-indigo-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                {it.tag}
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-200">{it.title}</h4>
              <p className="text-sm text-slate-500 mt-2 flex-1 leading-relaxed">{it.desc}</p>
              <div className="mt-5 flex items-center gap-3">
                <Link
                  className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  to="/projects"
                >
                  Explore →
                </Link>
                <Link
                  className="btn-shine ml-auto inline-block bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm px-4 py-1.5 rounded-full font-medium shadow hover:shadow-md transition-all duration-200"
                  to="/projects"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
