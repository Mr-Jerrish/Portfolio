import React from 'react'
import { 
  Code, 
  Database, 
  ServerCog, 
  FileCode, 
  Palette, 
  GitBranch, 
  Users,
  Braces
} from 'lucide-react'
import { motion } from 'framer-motion'


const skills = [
  // Frontend
  { name: 'HTML', icon: <FileCode /> },
  { name: 'CSS', icon: <Palette /> },
  { name: 'Javascript', icon: <Braces /> },
  { name: 'React', icon: <Code /> },
  { name: 'Tailwind CSS', icon: <Palette /> },
  
  // Backend
  { name: 'Node.js', icon: <ServerCog /> },
  { name: 'Express', icon: <ServerCog /> },
  { name: 'MongoDB', icon: <Database /> },
  
  // Tools & Methodology
  { name: 'Github', icon: <GitBranch /> },
  { name: 'Agile Methodology', icon: <Users /> },
]


export default function Skills() {
return (
<section id="skills" className="mt-16">
<motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold mb-6">Skills</motion.h2>


<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
{skills.map((s, i) => (
<motion.div
key={s.name}
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.06 * i }}
className="card p-4 rounded-lg flex flex-col items-center gap-2 text-center"
>
<div className="p-3 rounded-full border border-slate-700 shadow-glow-md">{s.icon}</div>
<div className="text-sm font-medium">{s.name}</div>
</motion.div>
))}
</div>
</section>
)
}