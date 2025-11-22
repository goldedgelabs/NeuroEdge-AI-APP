import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedThemeToggle({ onToggle }) {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => {
    setIsDark(!isDark);
    if (onToggle) onToggle(!isDark);
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-2 rounded-full border bg-white text-black shadow"
    >
      {isDark ? "🌙" : "☀️"}
    </motion.button>
  );
}
