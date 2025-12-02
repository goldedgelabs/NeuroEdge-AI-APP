'use client'
import React, { useEffect, useRef } from 'react'
import { Chart, LineController, LineElement, PointElement, LinearScale, TimeScale, Title, CategoryScale } from 'chart.js'
Chart.register(LineController, LineElement, PointElement, LinearScale, TimeScale, Title, CategoryScale)
export default function AgentMetricsCharts({ metrics }: { metrics?: any }) {
  const canvasRef = useRef<HTMLCanvasElement|null>(null)
  useEffect(()=>{
    if(!canvasRef.current) return
    const ctx = canvasRef.current.getContext('2d')!
    const ch = new Chart(ctx, { type:'line' as const, data:{ labels:[], datasets:[{label:'cpu',data:[]}] }, options:{} })
    return ()=> ch.destroy()
  },[])
  return <canvas ref={canvasRef} />
}
