"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ImmersiveWorkspace() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const rotate = useTransform(scrollYProgress, [0, 0.42, 0.72, 1], [0, 45, 22, 0])
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.78, 1], [0.92, 1.08, 1.02, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.5, 0.28, 0.2, 0.12])
  const gridY = useTransform(scrollYProgress, [0, 0.55, 1], ['0%', '18%', '34%'])

  return <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <motion.div style={{ rotate, scale, opacity }} className="workspace-frame absolute left-1/2 top-[46%] h-[min(72vw,44rem)] w-[min(72vw,44rem)] -translate-x-1/2 -translate-y-1/2 rounded-[3rem]" />
    <motion.div style={{ y: gridY, rotate: useTransform(rotate, (value) => value * -0.35) }} className="workspace-grid absolute left-1/2 top-[25%] h-[70vh] w-[120vw] -translate-x-1/2 opacity-60" />
    <motion.div style={{ rotate: useTransform(rotate, (value) => value * 0.5), opacity }} className="workspace-axis workspace-axis-x absolute left-1/2 top-1/2 h-px w-[90vw] -translate-x-1/2" />
    <motion.div style={{ rotate: useTransform(rotate, (value) => value * 0.5), opacity }} className="workspace-axis workspace-axis-y absolute left-1/2 top-1/2 h-[90vh] w-px -translate-x-1/2 -translate-y-1/2" />
  </div>
}
