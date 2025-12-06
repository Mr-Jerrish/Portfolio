import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'


export default function App() {
const location = useLocation()


return (
<Layout>
<AnimatePresence mode="wait">
<Routes location={location} key={location.pathname}>
<Route path="/" element={<Home />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/projects" element={<ProjectsPage />} />
<Route path="/skills" element={<SkillsPage />} />
<Route path="/contact" element={<ContactPage />} />
</Routes>
</AnimatePresence>
</Layout>
)
}