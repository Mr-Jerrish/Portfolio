import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AnimatedBackground() {
  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map(() => ({
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      opacity: Math.random(),
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {stars.map((star, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
          animate={{
            y: ["-20vh", "120vh"],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
