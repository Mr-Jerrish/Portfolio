import React from 'react'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'



export default function ResumeButton() {
return (
<motion.a
 href="/Sheik_Resume.pdf"
download="Sheik_Resume.pdf"
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.98 }}
className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium card shadow-glow-sm"
title="Download Resume"
>
<Download className="w-4 h-4" />
<span>Resume</span>
</motion.a>
)
}