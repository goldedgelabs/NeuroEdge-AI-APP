'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function PermissionModal({ open, onClose, onConfirm }: unknown) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Allow page scan?</h3>
        <p className="mt-2 text-sm">NeuroEdge can scan the current page for context to help your conversation. This will collect visible text from the page. No data will be sent without your confirmation.</p>
        <div className="mt-4 flex justify-end gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>Allow & Scan</Button>
        </div>
      </motion.div>
    </div>
  )
}
