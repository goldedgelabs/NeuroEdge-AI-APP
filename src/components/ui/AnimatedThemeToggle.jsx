import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="p-2 rounded-full border bg-white shadow text-black"
    >
      {isDark ? "🌙" : "☀️"}
    </motion.button>
  );
}
