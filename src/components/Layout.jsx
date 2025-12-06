import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'


export default function Layout({ children }) {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1">
{children}
</motion.main>
<footer className="text-center py-6 text-sm opacity-80">
© {new Date().getFullYear()} Portfolio - Sheik Mohamed Anzar
</footer>
</div>
)
}