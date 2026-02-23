import React from "react";
import {
  Code,
  Database,
  ServerCog,
  FileCode,
  Palette,
  GitBranch,
  Users,
  Braces,
  Layers,
  ClipboardList,
  Server,
  ShieldCheck,
  Github,
  Code2,
  FlaskConical,
  Bug,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML", icon: <FileCode /> },
  { name: "CSS", icon: <Palette /> },
  { name: "Javascript", icon: <Braces /> },
  { name: "Tailwind CSS", icon: <Palette /> },
  { name: "React", icon: <Code /> },
  { name: "React Hook Form", icon: <ClipboardList /> },
  { name: "Redux Toolkit", icon: <Layers /> },

  // Backend
  { name: "Node.js", icon: <ServerCog /> },
  { name: "Express", icon: <ServerCog /> },
  { name: "REST API Development", icon: <Server /> },
  { name: "Authentication & Security", icon: <ShieldCheck /> },

  { name: "MongoDB", icon: <Database /> },
  { name: "Mongoose ODM", icon: <Layers /> },
  { name: "Agile Methodology", icon: <Users /> },
  // Tools & Methodology
  { name: "Git", icon: <GitBranch /> }, // Branching & version control
  { name: "GitHub", icon: <Github /> }, // Repository hosting
  { name: "VS Code", icon: <Code2 /> }, // Code editor
  { name: "Postman", icon: <FlaskConical /> }, // API tool
  { name: "Chrome DevTools", icon: <Bug /> }, // Debugging
];

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-6"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i }}
            className="card p-4 rounded-lg flex flex-col items-center gap-2 text-center"
          >
            <div className="p-3 rounded-full border border-slate-700 shadow-glow-md">
              {s.icon}
            </div>
            <div className="text-sm font-medium">{s.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
