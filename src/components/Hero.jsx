import { motion } from 'framer-motion'
import Image from '../images/Sheik.png'
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
export default function Hero() {
return (
<section id="home" className="pt-5">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<motion.h1
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: 0.1 }}
className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight"
>
<motion.span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]">Sheik Mohamed Anzar</motion.span>
<motion.span className="block text-slate-300 text-xl md:text-2xl">MERN Stack Developer</motion.span>
</motion.h1>
<motion.p
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.25 }}
className="mt-6 text-slate-400 max-w-xl"
>
I build responsive, accessible, and high-performance web applications using the MERN stack (MongoDB, Express, React, and Node.js). I specialize in creating modern, fully responsive user interfaces
</motion.p>


<motion.div className="mt-8 flex items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
<a href="/projects" className="px-5 py-3 rounded-md font-medium card shadow-glow-md">See Projects</a>
<a href="/contact" className="px-5 py-3 rounded-md font-medium border border-slate-700">Contact Me</a>
</motion.div>
</div>
<div className="relative hover:scale-105 transition-all duration-300">
<motion.div
initial={{ scale: 0.95, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ delay: 0.5 }}
className="card p-6 rounded-2xl shadow-glow-md"
>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center overflow-hidden">
<img src={Image} className="w-full h-full object-cover" alt="avatar" />
</div>
<div>
<div className="font-semibold">Sheik Mohamed Anzar</div>
<div className="text-sm text-slate-400">Frontend & MERN Developer</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
<div className="p-3 rounded-md bg-[rgba(255,255,255,0.02)] hover:shadow-glow-md">
<div className="text-xs text-slate-400">Location</div>
<div>Bangalore, India</div>
</div>
<div className="p-3 rounded-md bg-[rgba(255,255,255,0.02)] hover:shadow-glow-md">
<div className="text-xs text-slate-400">Experience</div>
<div>1 Year</div>
</div>
</div>

<div className="mt-4 flex items-center justify-center gap-6">
  <a 
    href="https://github.com/Mr-Jerrish" 
    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
  >
    <Github className="w-5 h-5" />
    <span>GitHub</span>
  </a>

  <a 
   href="https://linkedin.com/in/sheik07"
    className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
  >
    <Linkedin className="w-5 h-5" />
    <span>LinkedIn</span>
  </a>
</div>

</motion.div>
</div>
</div>
</section>
)
}