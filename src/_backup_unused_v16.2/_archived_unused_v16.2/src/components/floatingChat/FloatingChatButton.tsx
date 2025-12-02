import { motion } from 'framer-motion';
'use client';
import React from 'react';

export default function FloatingChatButton({ onClick, open }: unknown) {
  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      aria-label="Open NeuroEdge Assistant"
      onClick={onClick}
      title="Toggle NeuroEdge Assistant (Ctrl/Cmd+K)"
      className={"fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-gradient-to-br from-indigo-600 to-indigo-400 text-white " + (open ? 'ring-4 ring-indigo-300' : '')}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7.03 3 3 6.58 3 11C3 13.39 4.11 15.56 6 17.03V21L10 19.1C10.98 19.39 11.98 19.5 13 19.5C17.97 19.5 22 15.92 22 11.5C22 7.08 17.97 3 13 3H12Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </motion.button>
  )
}
