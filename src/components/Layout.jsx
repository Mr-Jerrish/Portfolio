import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* 🌌 Animated Background */}
      <AnimatedBackground />

      {/* 🔝 Navbar */}
      <Navbar />

      {/* 📄 Page Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex-1"
      >
        {children}
      </motion.main>

      {/* 👣 Footer */}
      <footer className="relative z-10 text-center py-6 text-sm opacity-80 text-white">
        © {new Date().getFullYear()} Portfolio - Sheik Mohamed Anzar
      </footer>
    </div>
  );
}
