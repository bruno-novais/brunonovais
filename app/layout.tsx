import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bruno Novais — Designer multidisciplinar',
  description: 'Portfólio de Bruno Novais: Web Design, UI/UX Design e 3D Design.',
  generator: 'Next.js',
  icons: { icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoBN%20200x200%20_e3ff3e-IPhpiHkibWunVj8nFAc0Q2np3ROOJB.png', apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoBN%20200x200%20_e3ff3e-IPhpiHkibWunVj8nFAc0Q2np3ROOJB.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070908',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
