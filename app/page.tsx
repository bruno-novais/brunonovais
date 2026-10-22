'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { ImmersiveWorkspace } from '@/components/immersive-workspace'
import { ScrollDiveModel } from '@/components/scroll-dive-model'
import { projects } from '@/lib/projects'

const tools = [
  { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/e3ff3e' }, { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/e3ff3e' }, { name: 'Photoshop', logo: 'https://cdn.simpleicons.org/adobephotoshop/e3ff3e' }, { name: 'Illustrator', logo: 'https://cdn.simpleicons.org/adobeillustrator/e3ff3e' }, { name: 'Blender', logo: 'https://cdn.simpleicons.org/blender/e3ff3e' }, { name: '3ds Max', logo: 'https://cdn.simpleicons.org/autodesk/e3ff3e' },
]
const specialties = [
  { label: 'Web Designer', metric: '24+', metricLabel: 'interfaces publicadas', title: 'Sites que colocam marcas em movimento.', text: 'Estratégia, direção visual e desenvolvimento para criar experiências digitais rápidas, claras e memoráveis.', featured: 'Landing Page Educacional Lúpus' },
  { label: 'UI/UX Designer', metric: '18', metricLabel: 'produtos estruturados', title: 'Complexidade transformada em simplicidade.', text: 'Pesquiso, organizo e prototipo fluxos intuitivos que ajudam pessoas a alcançar seus objetivos.', featured: 'Previsão do Tempo Intuitiva e em Tempo Real' },
  { label: '3D Designer', metric: '36', metricLabel: 'renders entregues', title: 'Forma, luz e matéria com intenção.', text: 'Crio modelagens, visualizações realistas e imagens tridimensionais com direção de arte, composição e acabamento.', featured: 'Packshot Red Bull' },
]
const services = [
  { number: '01', title: 'Web Design', text: 'Sites que combinam estratégia, clareza e personalidade para colocar marcas em movimento.' },
  { number: '02', title: 'UI/UX Design', text: 'Interfaces intuitivas e sistemas visuais que transformam complexidade em experiências simples.' },
  { number: '03', title: '3D Design', text: 'Imagens e mundos tridimensionais com textura, luz e direção de arte para destacar ideias.' },
]

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <div className={className}><motion.div initial={{ y: 18, opacity: 1 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: .8, delay, ease: [0.22, 1, .36, 1] }}>{children}</motion.div></div>
}

function SkillCard({ tool, index }: { tool: typeof tools[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, .5, 1], [index % 2 ? -7 : 7, 0, index % 2 ? 5 : -5])
  const scale = useTransform(scrollYProgress, [0, .5, 1], [.86, 1, .9])
  const blur = useTransform(scrollYProgress, [0, .5, 1], ['blur(10px)', 'blur(2px)', 'blur(8px)'])
  return <motion.div ref={ref} style={{ rotate, scale }} className="tool-card glass-card group relative flex min-h-40 flex-col items-center justify-between overflow-hidden rounded-2xl p-5 will-change-transform"><motion.div style={{ backdropFilter: blur }} className="tool-glass" /><div className="relative z-10 flex min-h-24 flex-1 items-center justify-center"><img src={tool.logo} alt={`${tool.name} logo oficial`} className="tool-logo size-16 object-contain opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100" /></div><span className="relative z-10 mt-4 text-center text-sm font-medium tracking-wide text-primary/80 transition-colors group-hover:text-primary">{tool.name}</span></motion.div>
}

function ProjectFeature({ project, index }: { project: typeof projects[number]; index: number }) {
  return <motion.div initial={{ opacity: 1, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: .7, delay: index * .06 }} whileHover={{ y: -8 }} className={`group relative min-h-72 overflow-hidden rounded-3xl border border-white/10 p-6 ${project.className}`}>
    <div className="project-grid" /><div className="project-orb transition-transform duration-700 group-hover:scale-150 group-hover:rotate-[-20deg]" />
    <Link href={`/projetos/${project.id}`} className="relative z-10 flex h-full min-h-60 flex-col justify-between" aria-label={`Ver projeto ${project.title}`}>
      <div className="flex items-start justify-between"><span className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[10px] uppercase tracking-[.16em] text-white/65">{project.category}</span><ExternalLink className="size-4 text-white/45 transition-colors group-hover:text-primary" /></div>
      <div><div className="mb-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="text-[10px] text-white/45">#{tag}</span>)}</div><h3 className="max-w-md text-2xl font-medium leading-tight tracking-[-.05em] text-white transition-colors group-hover:text-primary">{project.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/55">{project.intro}</p></div>
    </Link>
  </motion.div>
}

export default function Home() {
  const [active, setActive] = useState(0)
  const specialty = specialties[active]
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const { scrollYProgress: servicesProgress } = useScroll({ target: servicesRef, offset: ['start end', 'end start'] })
  const serviceX = useTransform(servicesProgress, [0, .5, 1], ['-8%', '0%', '8%'])
  return <PageFrame><ImmersiveWorkspace /><ScrollDiveModel /><div className="relative z-10">
    <section ref={heroRef} className="hero-section relative isolate px-6 pb-24 pt-16 lg:px-10 lg:pt-24">
      <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-0 z-0" />
      <div className="pointer-events-none absolute left-1/2 top-10 z-0 size-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div><Reveal><div className="eyebrow mb-8 flex items-center gap-3"><span className="size-2 rounded-full bg-primary shadow-[0_0_16px_#e3ff3e]" /> Disponível para novos projetos</div></Reveal><Reveal delay={.08}><h1 className="max-w-4xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[.88] tracking-[-.08em]">Olá, meu nome é <span className="text-[#e3ff3e]">Bruno Novais</span><span className="text-white/25">.</span></h1></Reveal><Reveal delay={.16}><p className="mt-9 max-w-xl text-base leading-7 text-white/50">Designer multidisciplinar criando experiências digitais, interfaces e imagens 3D que conectam marcas a pessoas.</p></Reveal><Reveal delay={.22}><div className="mt-9 flex flex-wrap gap-3"><Link href="/projetos" className="group flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-105">Explorar projetos <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" /></Link><Link href="/sobre" className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 hover:border-white/40 hover:text-white">Sobre mim <ArrowDownRight className="size-4" /></Link></div></Reveal><div className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/10 py-5"><div><strong className="text-2xl text-primary">3+</strong><p className="mt-1 text-[10px] uppercase tracking-[.12em] text-white/35">Anos de experiência</p></div><div className="border-l border-white/10 pl-4"><strong className="text-2xl text-primary">+1000h</strong><p className="mt-1 text-[10px] uppercase tracking-[.12em] text-white/35">Horas em projetos</p></div><div className="border-l border-white/10 pl-4"><strong className="text-2xl text-primary">20+</strong><p className="mt-1 text-[10px] uppercase tracking-[.12em] text-white/35">Projetos publicados</p></div></div></div>
        <div className="relative"><div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8"><div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/25 blur-3xl" /><div className="relative"><Reveal><span className="eyebrow">Centro de Controle Interativo</span></Reveal><div role="tablist" aria-label="Especialidades de Bruno" className="mt-6 flex flex-wrap gap-2">{specialties.map((item, index) => <button key={item.label} role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`rounded-full border px-3 py-2 text-xs transition-all ${active === index ? 'border-primary bg-primary text-black shadow-[0_0_24px_rgba(227,255,62,.3)]' : 'border-white/10 text-white/50 hover:border-primary/50 hover:text-primary'}`}>{item.label}</button>)}</div><AnimatePresence mode="wait"><motion.div key={active} role="tabpanel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .35 }} className="mt-10"><div className="flex items-end justify-between gap-4"><div><strong className="text-5xl tracking-[-.07em] text-primary">{specialty.metric}</strong><p className="mt-1 text-xs uppercase tracking-[.18em] text-white/35">{specialty.metricLabel}</p></div><span className="text-right text-xs text-white/30">Destaque<br /><b className="text-white/65">{specialty.featured}</b></span></div><h2 className="mt-8 text-2xl font-medium leading-tight tracking-[-.04em]">{specialty.title}</h2><p className="mt-3 text-sm leading-6 text-white/45">{specialty.text}</p></motion.div></AnimatePresence></div></div></div>
      </div>
    </section>
    <section className="border-y border-white/10 px-6 py-20 lg:px-10"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><Reveal><span className="eyebrow">Meu kit criativo</span></Reveal><Reveal delay={.08}><h2 className="mt-5 max-w-sm text-4xl font-medium tracking-[-.06em]">Ferramentas para transformar intenção em forma.</h2></Reveal></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{tools.map((tool, index) => <SkillCard key={tool.name} tool={tool} index={index} />)}</div></div></section>
    <section id="sobre-mim" className="relative border-b border-white/10 px-6 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.55fr_.8fr_1.1fr]"><div className="scroll-dive-anchor glass-card relative min-h-[28rem] overflow-hidden rounded-[2rem]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(227,255,62,.18),transparent_58%)]" /><span className="absolute left-6 top-6 z-10 eyebrow">Retrato / 03D</span><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eu-Vh3FurBBoXLLNPkJu3as9LjkHS1TSS.png" alt="Modelo 3D em clay de Bruno Novais" className="absolute inset-0 size-full object-contain object-top opacity-90 mix-blend-lighten" /><div className="pointer-events-none absolute inset-10 rounded-[1.5rem] border border-primary/20" /></div><div><Reveal><span className="eyebrow">Sobre mim</span></Reveal><Reveal delay={.08}><h2 className="mt-5 text-5xl font-medium leading-[.95] tracking-[-.07em]">Design com repertório, técnica e intenção.</h2></Reveal></div><div className="max-w-2xl text-base leading-8 text-white/55"><Reveal delay={.12}><p>Sou Web Designer, Designer 3D e especialista em WordPress. Atuo criando experiências digitais completas, da estratégia visual ao desenvolvimento Front-End.</p></Reveal><Reveal delay={.18}><p className="mt-5">Meu trabalho combina modelagens e visualizações realistas em 3D com interfaces funcionais e memoráveis. Também desenvolvo com HTML, CSS, JavaScript, React e React Native, transformando conceitos em produtos claros, responsivos e prontos para crescer.</p></Reveal><Reveal delay={.24}><Link href="/sobre" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline">Conheça minha trajetória <ArrowUpRight className="size-4" /></Link></Reveal></div></div></section>
    <section className="border-b border-white/10 px-6 py-24 lg:px-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><Reveal><span className="eyebrow">Projetos em destaque</span></Reveal><Reveal delay={.08}><h2 className="mt-5 max-w-2xl text-5xl font-medium tracking-[-.07em]">Ideias transformadas em experiências.</h2></Reveal></div><Link href="/projetos" className="text-sm text-white/55 transition-colors hover:text-primary">Ver portfólio completo <ArrowUpRight className="ml-1 inline size-4" /></Link></div><div className="mt-14 grid gap-4 md:grid-cols-2">{projects.map((project, index) => <ProjectFeature key={project.id} project={project} index={index} />)}</div></div></section>
    <section ref={servicesRef} className="px-6 py-28 lg:px-10"><div className="mx-auto max-w-7xl"><Reveal><span className="eyebrow">Como posso ajudar</span></Reveal><Reveal delay={.08}><h2 className="mt-5 max-w-xl text-5xl font-medium tracking-[-.07em]">Uma direção visual para cada camada da experiência.</h2></Reveal><motion.div style={{ x: serviceX }} className="mt-14 divide-y divide-white/10 border-y border-white/10">{services.map((service) => <div key={service.number} className="service-card group grid gap-5 py-9 transition-colors md:grid-cols-[5rem_1fr_1.2fr] md:items-center"><span className="service-number text-3xl font-light text-white/25 transition-colors group-hover:text-primary">{service.number}</span><h3 className="text-2xl font-medium tracking-[-.04em] transition-colors group-hover:text-primary">{service.title}</h3><p className="max-w-md text-sm leading-6 text-white/45">{service.text}</p></div>)}</motion.div></div></section>
  </div></PageFrame>
}
