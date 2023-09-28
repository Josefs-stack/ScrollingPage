import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RedesSociais from '@/components/RedesSociais'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auto Scroll',
  description: 'Scrooling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <RedesSociais />
      </body>
    </html>
  )
}
