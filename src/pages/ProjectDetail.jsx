import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects.json'

export default function ProjectDetail(){
  const { id } = useParams()
  const pid = Number(id)
  const project = projects.find(p => p.id === pid)

  if(!project){
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="mt-4">We couldn't find the project you're looking for.</p>
        <Link to="/projects" className="mt-4 inline-block text-indigo-600">Back to Projects</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-slate-600 mt-4">{project.description}</p>
          <div className="mt-6">
            <a className="inline-block bg-indigo-600 text-white px-4 py-2 rounded" href={project.link}>Visit project</a>
            <Link to="/projects" className="ml-3 inline-block text-indigo-600">Back</Link>
          </div>
        </div>
        <div className="rounded overflow-hidden bg-gray-100">
          <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}
