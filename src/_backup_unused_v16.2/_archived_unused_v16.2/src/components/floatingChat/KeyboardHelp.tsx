'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function KeyboardHelp({ open, onClose }: unknown) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/30">
      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Keyboard Shortcuts</h3>
        <ul className="mt-4 space-y-2">
          <li><kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl/⌘ + K</kbd> — Toggle NeuroEdge Assistant</li>
          <li><kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> — Close assistant</li>
          <li><kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> — Send message</li>
        </ul>
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </motion.div>
    </div>
  )
}
