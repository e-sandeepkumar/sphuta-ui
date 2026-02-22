import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  { id: 1, title: 'Project One', desc: 'Short description' },
  { id: 2, title: 'Project Two', desc: 'Short description' },
  { id: 3, title: 'Project Three', desc: 'Short description' },
]

export default function ProjectsPreview(){
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(it => {
        const img = `https://picsum.photos/seed/project-${it.id}/480/320`
        return (
          <div key={it.id} className="border rounded overflow-hidden shadow-sm hover:shadow transition flex flex-col bg-white">
            <div className="w-full h-44 bg-gray-100 overflow-hidden">
              <img src={img} alt={it.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="font-semibold">{it.title}</h4>
              <p className="text-sm text-slate-600 mt-2 flex-1">{it.desc}</p>
              <div className="mt-4">
                <Link className="inline-block text-indigo-600 hover:underline" to="/projects">Explore</Link>
                <Link className="ml-3 inline-block bg-indigo-600 text-white px-3 py-1 rounded" to="/projects">View</Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
