import React from 'react'
import { motion } from 'framer-motion'


export default function AboutPage() {
return (
<div className="max-w-6xl mx-auto px-6 py-16 text-slate-200">
  <h1 className="text-3xl font-bold mb-6">About</h1>

<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
     <p className="text-gray-400 text-lg leading-relaxed">
    Hi! I’m <strong>Sheik Mohamed Anzar</strong>, a passionate <strong>MERN Stack Developer</strong> 
    with hands-on experience in <strong>React, Tailwind CSS, Material-UI, Node.js, Express, and MongoDB</strong>.<br /><br />
    I completed a <strong>4-month internship at FeOS Technologies Pvt Ltd</strong> (MERN Stack) and will be joining 
    <strong> Whydigit Solutions Pvt Ltd</strong> as a <strong>Front-End Developer</strong> from January 2025.<br /><br />
    I enjoy building <strong>real-world applications</strong> and currently working on projects like <strong>Expense Tracker</strong>   using React, Tailwind, Node, Express, and MongoDB.<br /><br />
    I am a <strong>quick learner and proactive team player</strong>, with experience in developing modules for <strong>HRMS and Finance projects</strong>. 
    My goal is to create <strong>responsive, high-performance, and user-friendly web applications</strong> while continuously learning backend technologies.
  </p>
    </motion.div>
</div>
)
}