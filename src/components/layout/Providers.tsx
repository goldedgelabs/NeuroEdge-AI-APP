'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence>{children}</AnimatePresence>
    </ThemeProvider>
  )
}
