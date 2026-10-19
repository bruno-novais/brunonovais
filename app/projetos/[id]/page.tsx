import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PageFrame } from '@/components/site-shell'
import { projects } from '@/lib/projects'

export function generateStaticParams() { return projects.map(({ id }) => ({ id })) }

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((item) => item.id === id)
  if (!project) notFound()
  return <PageFrame><article className="mx-auto max-w-7xl px-6 pb-28 pt-14 lg:px-10 lg:pt-24"><Link href="/projetos" className="inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-primary"><ArrowLeft className="size-4" /> Voltar para projetos</Link><div className="mt-16 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><p className="eyebrow">/ {project.category}</p><h1 className="mt-6 max-w-3xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[.9] tracking-[-.08em]">{project.title}</h1><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">{project.intro}</p><div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/55">{tag}</span>)}</div></div><div className={`glass-card relative min-h-[25rem] overflow-hidden rounded-[2rem] p-6 ${project.className}`}><div className="absolute inset-0 opacity-60"><div className="project-orb" /><div className="project-grid" /></div><div className="relative flex h-full items-end"><span className="rounded-full border border-white/20 bg-black/20 px-3 py-2 text-xs text-white/65">Projeto {project.year}</span></div></div></div><div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[.6fr_1.4fr]"><p className="text-xs uppercase tracking-[.2em] text-primary">Sobre o projeto</p><div><p className="max-w-2xl text-xl leading-9 text-white/75">{project.description}</p><Link href="/projetos" className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black">Ver todos os projetos <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" /></Link></div></div></article></PageFrame>
}
