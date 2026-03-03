import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import CursorGlow from './components/CursorGlow'
import AuroraBackground from './components/AuroraBackground'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Michael Calayo',
  description: 'Created by Michael Calayo'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0f1a] text-slate-300 antialiased`}
      >
        <AuroraBackground />
        <Navbar />
        <CursorGlow />
        <div className='pt-16 mid:pt-0 mid:pl-64'>
          {children}
        </div>
      </body>
    </html>
  )
}
