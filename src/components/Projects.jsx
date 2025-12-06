import React from 'react'
import { motion } from 'framer-motion'


const demoProjects = [
{
id: 1,
title: 'Movie Library (React)',
desc: 'Responsive app using TMDB API, search, pagination and favorites.',
tech: ['React', 'Tailwind', 'TMDB API'],
liveUrl: 'https://movie-lib-iota.vercel.app/',
repoUrl: 'https://github.com/Mr-Jerrish/MovieLib.git'
},
{
  id: 2,
  title: 'AI Chat Box (React + Tailwind CSS + DeepSeek API)',
  desc: 'A responsive AI chat interface built using React, Tailwind CSS, and DeepSeek API with smooth UI and streaming responses.',
  tech: ['React', 'Tailwind CSS', 'DeepSeek API'],
  liveUrl: 'https://ai-chatbox-gc73qdj8q-sheikmohamedanzarm-7103s-projects.vercel.app',
  repoUrl: 'https://github.com/Mr-Jerrish/ai-chatbox'
},
]


export default function Projects() {
return (
<section id="projects" className="mt-20">
<motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">Projects</motion.h2>


<div className="grid md:grid-cols-2 gap-6">
{demoProjects.map((p, idx) => (
<motion.article
key={p.id}
className="card p-6 rounded-xl project-card"
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.08 * idx }}
whileHover={{ y: -6, scale: 1.01 }}
>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold">{p.title}</h3>
<p className="text-sm text-slate-400 mt-2">{p.desc}</p>
</div>
<div className="text-xs text-slate-400">Web</div>
</div>


<div className="mt-4 flex flex-wrap gap-2">
{p.tech.map(t => (
<span key={t} className="text-xs px-2 py-1 rounded-md bg-[rgba(255,255,255,0.02)]">{t}</span>
))}
</div>


<div className="mt-4 flex gap-3">
<a href={p.liveUrl} className="px-3 py-2 rounded-md border border-slate-700">Live</a>
<a href={p.repoUrl} className="px-3 py-2 rounded-md border border-slate-700">Code</a>
</div>
</motion.article>
))}
</div>
</section>
)
}