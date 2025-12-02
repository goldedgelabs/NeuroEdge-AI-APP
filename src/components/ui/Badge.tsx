'use client'
import React from 'react'
export default function Badge({ children }: { children: React.ReactNode }){
  return <span className="inline-flex items-center px-2 py-1 rounded-full bg-sky-100 text-sky-800 text-xs">{children}</span>
}
