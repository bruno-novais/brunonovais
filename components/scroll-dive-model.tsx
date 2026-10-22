'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const modelImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eu-Vh3FurBBoXLLNPkJu3as9LjkHS1TSS.png'

export function ScrollDiveModel() {
  const { scrollY } = useScroll()
  const smoothScroll = useSpring(scrollY, { stiffness: 90, damping: 22, mass: 0.5 })
  const x = useTransform(smoothScroll, [0, 720, 1500], ['0vw', '-4vw', '-26vw'])
  const y = useTransform(smoothScroll, [0, 720, 1500], ['4vh', '10vh', '14vh'])
  const scale = useTransform(smoothScroll, [0, 720, 1500], [0.8, 1.06, 0.48])
  const rotate = useTransform(smoothScroll, [0, 720, 1500], [0, -8, -4])
  const opacity = useTransform(smoothScroll, [0, 700, 1500, 1700], [0.96, 0.9, 0.35, 0])
  const blur = useTransform(smoothScroll, [0, 260, 720, 1500], ['blur(20px)', 'blur(12px)', 'blur(3px)', 'blur(0px)'])

  return <motion.div aria-hidden="true" style={{ x, y, scale, rotate, opacity, filter: blur }} className="scroll-dive-model pointer-events-none fixed right-0 max-w-[52vw] overflow-hidden z-[5] w-[min(52vw,30rem)] origin-center will-change-transform md:right-[5vw] md:top-[14vh] md:w-[min(40vw,30rem)] lg:top-[15vh]">
    <div className="scroll-dive-frame glass-card relative aspect-[2/3] overflow-hidden rounded-[2.5rem] p-2">
      <img src={modelImage} alt="" className="size-full object-cover object-top mix-blend-lighten" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070908]/65 via-transparent to-primary/10" />
      <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-primary/20" />
    </div>
  </motion.div>
}
