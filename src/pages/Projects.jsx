import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects.json'

export default function Projects() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if(!q) return projects
    return projects.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="mb-6 flex gap-2">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="flex-1 rounded border px-3 py-2"
        />
        <Link to="/" className="inline-block px-3 py-2 rounded border">Back</Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <div key={p.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col">
            <div className="w-full h-40 bg-gray-100 overflow-hidden rounded">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 flex-1">{p.description}</p>
              <div className="mt-4">
                <Link className="text-indigo-600 hover:underline" to={`/projects/${p.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center text-slate-600">No projects match your search.</div>
        )}
      </div>
    </div>
  )
}
