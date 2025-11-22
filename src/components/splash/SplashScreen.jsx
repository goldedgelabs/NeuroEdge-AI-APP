// src/components/splash/SplashScreen.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish(), 1600);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="splash-logo"
      >
        <img
          src="/neuroedge-logo.png"
          alt="NeuroEdge Logo"
          className="splash-img"
        />
        <div className="splash-title">NeuroEdge</div>
        <div className="splash-sub">Users Choice First</div>
      </motion.div>
    </div>
  );
}
