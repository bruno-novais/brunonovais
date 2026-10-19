'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'

const tools = [
  { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/ffa200' },
  { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/ffa200' },
  { name: 'Photoshop', logo: 'https://cdn.simpleicons.org/adobephotoshop/ffa200' },
  { name: 'Illustrator', logo: 'https://cdn.simpleicons.org/adobeillustrator/ffa200' },
  { name: 'Blender', logo: 'https://cdn.simpleicons.org/blender/ffa200' },
  { name: '3ds Max', logo: 'https://cdn.simpleicons.org/autodesk/ffa200' },
]

const specialties = [
  { label: 'Web Designer', metric: '24+', metricLabel: 'interfaces publicadas', title: 'Sites que colocam marcas em movimento.', text: 'Estratégia, direção visual e desenvolvimento para criar experiências digitais rápidas, claras e memoráveis.', featured: 'Landing Page Educacional Lúpus' },
  { label: 'UI/UX Designer', metric: '18', metricLabel: 'produtos estruturados', title: 'Complexidade transformada em simplicidade.', text: 'Pesquiso, organizo e prototipo fluxos intuitivos que ajudam pessoas a alcançar seus objetivos.', featured: 'Previsão do Tempo Intuitiva e em Tempo Real' },
  { label: '3D Designer', metric: '36', metricLabel: 'renders entregues', title: 'Forma, luz e matéria com intenção.', text: 'Crio imagens tridimensionais com direção de arte, composição e acabamento para destacar ideias.', featured: 'Packshot Red Bull' },
]
const services = [
  { number: '01', title: 'Web Design', text: 'Sites que combinam estratégia, clareza e personalidade para colocar marcas em movimento.' },
  { number: '02', title: 'UI/UX Design', text: 'Interfaces intuitivas e sistemas visuais que transformam complexidade em experiências simples.' },
  { number: '03', title: '3D Design', text: 'Imagens e mundos tridimensionais com textura, luz e direção de arte para destacar ideias.' },
]

export default function Home() {
  const [active, setActive] = useState(0)
  const specialty = specialties[active]
  return <PageFrame>
    <section className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
      <div className="pointer-events-none absolute left-1/2 top-10 size-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
        <div><motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-8 flex items-center gap-3"><span className="size-2 rounded-full bg-primary shadow-[0_0_16px_#ffa200]" /> Disponível para novos projetos</motion.div><motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="max-w-4xl text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[.88] tracking-[-.08em]">Olá, meu nome<br />é <span className="text-primary">Bruno</span><span className="text-white/25">.</span></motion.h1><p className="mt-9 max-w-lg text-base leading-7 text-white/50">Designer multidisciplinar criando experiências digitais, interfaces e imagens 3D que conectam marcas a pessoas.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/projetos" className="group flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-105">Explorar projetos <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" /></Link><Link href="/sobre" className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 hover:border-white/40 hover:text-white">Sobre mim <ArrowDownRight className="size-4" /></Link></div></div>
        <div className="relative lg:pb-2"><div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8"><div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/25 blur-3xl" /><div className="relative"><span className="eyebrow">Especialidades</span><div role="tablist" aria-label="Especialidades de Bruno" className="mt-6 flex flex-wrap gap-2">{specialties.map((item, index) => <button key={item.label} role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`rounded-full border px-3 py-2 text-xs transition-all ${active === index ? 'border-primary bg-primary text-black shadow-[0_0_24px_rgba(255,162,0,.3)]' : 'border-white/10 text-white/50 hover:border-primary/50 hover:text-primary'}`}>{item.label}</button>)}</div><AnimatePresence mode="wait"><motion.div key={active} role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .25 }} className="mt-10"><div className="flex items-end justify-between gap-4"><div><strong className="text-5xl tracking-[-.07em] text-primary">{specialty.metric}</strong><p className="mt-1 text-xs uppercase tracking-[.18em] text-white/35">{specialty.metricLabel}</p></div><span className="text-right text-xs text-white/30">Destaque<br /><b className="text-white/65">{specialty.featured}</b></span></div><h2 className="mt-8 text-2xl font-medium leading-tight tracking-[-.04em]">{specialty.title}</h2><p className="mt-3 text-sm leading-6 text-white/45">{specialty.text}</p></motion.div></AnimatePresence></div></div></div>
      </div>
    </section>
    <section className="border-y border-white/10 px-6 py-20 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><span className="eyebrow">Meu kit criativo</span><h2 className="mt-5 max-w-sm text-4xl font-medium tracking-[-.06em]">Ferramentas para transformar intenção em forma.</h2></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{tools.map(({ name, logo }) => <div key={name} className="tool-card glass-card group relative flex min-h-40 flex-col items-center justify-between overflow-hidden rounded-2xl p-5"><div className="tool-glass" /><div className="relative z-10 flex min-h-24 flex-1 items-center justify-center"><img src={logo} alt={`${name} logo oficial`} className="tool-logo size-16 object-contain opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100" onError={(event) => { event.currentTarget.style.display = 'none' }} /></div><span className="relative z-10 mt-4 text-center text-sm font-medium tracking-wide text-primary/80 transition-colors group-hover:text-primary">{name}</span></div>)}</div></div></section>
    <section className="px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><span className="eyebrow">Como posso ajudar</span><div className="mt-10 divide-y divide-white/10 border-y border-white/10">{services.map((service) => <div key={service.number} className="service-card group grid gap-5 py-8 transition-colors md:grid-cols-[5rem_1fr_1.2fr] md:items-center"><span className="service-number text-3xl font-light text-white/25 transition-colors group-hover:text-primary">{service.number}</span><h3 className="text-2xl font-medium tracking-[-.04em] transition-colors group-hover:text-primary">{service.title}</h3><p className="max-w-md text-sm leading-6 text-white/45">{service.text}</p></div>)}</div></div></section>
  </PageFrame>
}
