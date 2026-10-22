'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ArrowUpRight, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoBN%20200x200%20_0086ff-DHAaxsL6QyFjcC27l4EK26NZnKhB0X.png'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const links = [{ href: '/', label: 'Home' }, { href: '/sobre', label: 'Sobre' }, { href: '/projetos', label: 'Projetos' }]
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-4 py-2.5 backdrop-blur-xl sm:px-5">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl p-2" aria-label="Bruno Novais, página inicial">
          <img src={logo} alt="Logo BN" className="max-h-8 w-auto max-w-10 rounded-lg object-contain" />
          <span className="hidden text-sm font-semibold tracking-wide sm:block">BRUNO NOVAIS<span className="text-primary">.</span></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {links.map((link) => <Link key={link.href} href={link.href} className={`rounded-full px-4 py-2 text-sm transition-colors ${pathname === link.href ? 'bg-primary text-black' : 'text-white/55 hover:text-white'}`}>{link.label}</Link>)}
        </nav>
        <Link href="/projetos" className="hidden items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-black sm:flex">Ver trabalho <ArrowUpRight className="size-3.5" /></Link>
        <button className="rounded-full p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border border-white/10 bg-black/90 p-3 backdrop-blur-xl md:hidden">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-2xl px-4 py-3 text-sm ${pathname === link.href ? 'bg-primary text-black' : 'text-white/70'}`}>{link.label}</Link>)}</motion.nav>}</AnimatePresence>
    </header>
  )
}

export function SiteFooter() {
  return <footer className="border-t border-white/10 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-white/35 sm:flex-row"><Link href="/" className="flex items-center gap-2 rounded-xl px-3 py-2"><img src={logo} alt="Logo BN" className="max-h-8 w-auto max-w-10 rounded-md object-contain" /><span>Bruno Novais</span></Link><span>© 2026 - Bruno Novais</span><span>Designing digital experiences<span className="text-primary">.</span></span></div></footer>
}

export function PageFrame({ children }: { children: React.ReactNode }) { return <><SiteHeader /><main className="min-h-screen pt-24">{children}</main><SiteFooter /></> }
