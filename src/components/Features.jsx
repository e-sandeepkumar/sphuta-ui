import React from 'react'

const features = [
  {
    id: 1,
    title: 'Fast performance',
    desc: 'Optimized builds and snappy UIs using Vite and React.',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    ),
  },
  {
    id: 2,
    title: 'Responsive design',
    desc: 'Built mobile-first with Tailwind so layouts look great everywhere.',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v2m0 16v2m8-8h2M2 12H4m13.657-6.657l1.414 1.414M4.929 19.071l1.414-1.414M19.071 19.071l-1.414-1.414M6.343 6.343L4.93 4.93"></path></svg>
    ),
  },
  {
    id: 3,
    title: 'Accessible',
    desc: 'Focus on semantic markup and keyboard navigation for all users.',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-3.866 3.582-7 8-7 0 5-2 9-8 9s-8-4-8-9c4.418 0 8 3.134 8 7z"></path></svg>
    ),
  },
]

export default function Features(){
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Features</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {features.map(f => (
          <div key={f.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-start gap-3">
            <div>{f.icon}</div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

