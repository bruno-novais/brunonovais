'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export function ImmersiveWorkspace() {
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 900, 1800, 3000], [0, 45, 18, -8])
  const scale = useTransform(scrollY, [0, 900, 1800, 3000], [0.9, 1.08, 1.18, 1.02])
  const y = useTransform(scrollY, [0, 1600, 3200], [0, -90, -180])
  const opacity = useTransform(scrollY, [0, 500, 1500, 3000], [0.52, 0.32, 0.2, 0.08])
  const orbY = useTransform(scrollY, [0, 1600, 3200], [0, 170, -80])
  const orbRotate = useTransform(scrollY, [0, 3200], [0, 180])

  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <motion.div style={{ y: orbY, x: useTransform(scrollY, [0, 3200], ['0vw', '12vw']), rotate: orbRotate, opacity: useTransform(opacity, value => value * 1.4) }} className="ambient-orb ambient-orb-one absolute left-[-12rem] top-[18%] size-[34rem] rounded-full" />
    <motion.div style={{ y: useTransform(orbY, value => value * -0.7), x: useTransform(scrollY, [0, 3200], ['0vw', '-10vw']), rotate: useTransform(orbRotate, value => value * -0.45), opacity: useTransform(opacity, value => value * 1.25) }} className="ambient-orb ambient-orb-two absolute right-[-14rem] top-[52%] size-[38rem] rounded-[42%]" />
    <motion.div style={{ y: useTransform(orbY, value => value * 0.45), rotate: useTransform(orbRotate, value => value * 0.25), opacity: useTransform(opacity, value => value * 1.1) }} className="ambient-orb ambient-orb-three absolute bottom-[-12rem] left-[28%] size-[24rem] rounded-full" />
    <motion.div style={{ rotate, scale, y, opacity }} className="workspace-frame absolute left-1/2 top-[45%] size-[min(74vw,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-[3rem]" />
    <motion.div style={{ y, rotate: useTransform(rotate, value => value * -0.35), opacity }} className="workspace-grid absolute left-1/2 top-[18%] h-[85vh] w-[130vw] -translate-x-1/2" />
    <motion.div style={{ rotate: useTransform(rotate, value => value * .5), opacity }} className="workspace-axis workspace-axis-x absolute left-1/2 top-1/2 h-px w-[95vw] -translate-x-1/2" />
    <motion.div style={{ rotate: useTransform(rotate, value => value * .5), opacity }} className="workspace-axis workspace-axis-y absolute left-1/2 top-1/2 h-[95vh] w-px -translate-x-1/2 -translate-y-1/2" />
    <motion.div style={{ y: orbY, rotate: orbRotate, opacity }} className="workspace-orb absolute left-[12%] top-[30%] size-32 rounded-[2rem] border border-primary/30 bg-primary/10 blur-[1px]" />
    <motion.div style={{ y: useTransform(orbY, value => value * -0.5), rotate: useTransform(orbRotate, value => value * -0.6), opacity }} className="workspace-orb absolute bottom-[18%] right-[10%] size-20 rounded-full border border-primary/25 bg-primary/10" />
  </div>
}
