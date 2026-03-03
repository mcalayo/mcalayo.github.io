'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
  { href: '#gallery', label: 'Photos' },
  { href: '#interactive', label: 'Interactive' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [clickOverride, setClickOverride] = useState<string | null>(null)
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { scrollYProgress } = useScroll()

  const effectiveActive = clickOverride ?? activeSection

  useEffect(() => {
    const sections = ['home', 'about', 'contact', 'gallery', 'interactive']
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.4
      let current = 'home'
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = sections[i]
          break
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => { if (clickTimerRef.current) clearTimeout(clickTimerRef.current) }
  }, [])

  const handleNavClick = (section: string) => {
    setClickOverride(section)
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
    clickTimerRef.current = setTimeout(() => setClickOverride(null), 1000)
  }

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-[3px] bg-sky-400 origin-left z-50'
        style={{ scaleX: scrollYProgress }}
      />

      {/* Desktop sidebar */}
      <nav className='hidden mid:flex fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-700/50 flex-col p-8 z-40'>
        <div className='mb-12'>
          <Link href='#home' className='text-xl font-bold text-slate-100 hover:text-sky-400 transition-colors'>
            Michael Calayo
          </Link>
          <p className='text-sky-400 text-sm mt-1'>Full Stack Engineer</p>
        </div>

        <div className='flex flex-col gap-6 flex-1'>
          {navLinks.map(({ href, label }) => {
            const isActive = effectiveActive === href.slice(1)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => handleNavClick(href.slice(1))}
                className={`text-sm font-medium transition-colors duration-200 ${isActive ? 'text-sky-400' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {label}
              </Link>
            )
          })}
          <Link href='https://linkedin.com/in/michaelcalayo' target='_blank' className='text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors duration-200'>
            LinkedIn
          </Link>
          <Link href='https://github.com/mcalayo/mcalayo.github.io' target='_blank' className='text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors duration-200'>
            GitHub
          </Link>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className='flex mid:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900/95 backdrop-blur border-b border-slate-700/50 items-center justify-between px-6 z-40'>
        <Link href='#home' className='text-lg font-bold text-slate-100'>
          Michael Calayo
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='text-slate-300 hover:text-sky-400 p-2 transition-colors'
          aria-label='Toggle menu'
        >
          <div className='flex flex-col gap-1.5 w-6'>
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className='block h-0.5 bg-current rounded-full' />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className='block h-0.5 bg-current rounded-full' />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className='block h-0.5 bg-current rounded-full' />
          </div>
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 bg-slate-900 z-30 flex flex-col items-center justify-center mid:hidden'
          >
            {navLinks.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className='text-5xl font-bold text-slate-100 hover:text-sky-400 transition-colors py-4 block text-center'
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className='flex gap-8 mt-12 text-slate-400'
            >
              <Link href='https://linkedin.com/in/michaelcalayo' onClick={() => setMenuOpen(false)} target='_blank' className='hover:text-sky-400 transition-colors'>
                LinkedIn
              </Link>
              <Link href='https://github.com/mcalayo/mcalayo.github.io' onClick={() => setMenuOpen(false)} target='_blank' className='hover:text-sky-400 transition-colors'>
                GitHub
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
