import React,{useState} from 'react'
import { Menu, X } from 'lucide-react'
import ResumeButton from './ResumeButton'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Desktop link classes
  const linkClass = "text-slate-100 hover:text-slate-900 hover:bg-slate-100 px-2 py-1 rounded-lg border border-transparent transition"
  const linkClassActive = "text-slate-900 bg-slate-100 px-2 py-1 rounded-lg border border-slate-100 font-semibold"

  return (
    <header className="fixed w-full z-40 top-0 backdrop-blur-sm p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/">
          <motion.span
            className="text-xl font-semibold tracking-wider text-slate-100"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            PORTFOLIO
          </motion.span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? linkClassActive : linkClass
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? linkClassActive : linkClass
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? linkClassActive : linkClass
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? linkClassActive : linkClass
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? linkClassActive : linkClass
            }
          >
            Contact
          </NavLink>

          <ResumeButton />
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={() => setOpen(v => !v)}
            className="p-2 rounded-md card"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-3 max-w-6xl mx-auto bg-transparent card p-4 rounded-lg"
        >
          <div className="flex flex-col gap-3">

            {/* Mobile NavLink must use function className */}
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? linkClassActive : linkClass
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? linkClassActive : linkClass
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? linkClassActive : linkClass
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/skills"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? linkClassActive : linkClass
              }
            >
              Skills
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? linkClassActive : linkClass
              }
            >
              Contact
            </NavLink>

            <div className="pt-2"><ResumeButton /></div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
