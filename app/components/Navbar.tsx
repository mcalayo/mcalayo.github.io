'use client'

import Link from 'next/link'
import NavButton from './NavButton'
import { useState } from 'react'

enum menuType {
  HAMBURGER = 1,
  USER = 2,
  LOGOUT = 3
}

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

  const [showUserMenu, setShowUserMenu] = useState(false)

  function handleHamburgerClick(): void {
    if (showHamburgerMenu) {
      setShowHamburgerMenu(false)
    } else {
      setShowUserMenu(false)
      setShowHamburgerMenu(true)
    }
  }

  function handleUserClick(): void {
    if (showUserMenu) {
      setShowUserMenu(false)
    } else {
      setShowHamburgerMenu(false)
      setShowUserMenu(true)
    }
  }

  function handleMenuItemClick(type: number): void {
    if (type == menuType.HAMBURGER) {
      handleHamburgerClick()
    }
    if (type == menuType.USER) {
      handleUserClick()
    }
    if (type == menuType.LOGOUT) {
      handleUserClick()
    }
  }

  return (
    <div className='grid h-16 grid-flow-col grid-rows-1 items-center justify-between border-b border-slate-400 px-6'>
      <div className='z-10'>
        <NavButton
          onClickHandler={handleHamburgerClick}
          buttonType={'HAMBURGER'}
        ></NavButton>
      </div>
      {showHamburgerMenu && (
        <div className='absolute top-16 left-0'>
          <div className='flex h-[calc(100vh-64px)] w-screen flex-col gap-y-6 overflow-hidden bg-sky-100 px-4 py-6 sm:w-80'>
            <button onClick={() => handleMenuItemClick(1)} type='button'>
              <Link
                className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[124px] py-2.5 text-center text-sm font-medium text-slate-600 hover:bg-sky-300/50'
                href={'/'}
              >
                Home
              </Link>
            </button>
            <button onClick={() => handleMenuItemClick(1)} type='button'>
              <Link
                className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[124px] py-2.5 text-center text-sm font-medium text-slate-600 hover:bg-sky-300/50'
                href={'/about'}
              >
                About
              </Link>
            </button>
            <button onClick={() => handleMenuItemClick(1)} type='button'>
              <Link
                className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[124px] py-2.5 text-center text-sm font-medium text-slate-600 hover:bg-sky-300/50'
                href={'/music'}
              >
                Music
              </Link>
            </button>
          </div>

          <button
            className='absolute top-0 left-80 hidden h-[calc(100vh-64px)] w-[calc(100vw-320px)] bg-black opacity-20 sm:block'
            onClick={() => setShowHamburgerMenu(false)}
          ></button>
        </div>
      )}

      <Link
        href='/'
        className='title-md:text-4xl text-2xl font-bold text-slate-700'
      >
        Michael Calayo
      </Link>

      <div className='z-10 flex'>
        <NavButton
          onClickHandler={handleUserClick}
          buttonType={'USER'}
        ></NavButton>
      </div>
      {showUserMenu && (
        <div className='absolute top-16 left-0'>
          <div className='absolute left-[calc(100vw-320px)] flex h-[calc(100vh-64px)] w-screen flex-col gap-y-6 overflow-hidden bg-sky-100 px-4 py-6 sm:w-80'>
            <button onClick={() => handleMenuItemClick(2)} type='button'>
              <Link
                className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[117px] py-2.5 text-center text-sm font-medium text-slate-600 hover:bg-sky-300/50'
                href={'https://linkedin.com/in/michaelcalayo'}
              >
                LinkedIn
              </Link>
            </button>
            <button onClick={() => handleMenuItemClick(2)} type='button'>
              <Link
                className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[122px] py-2.5 text-center text-sm font-medium text-slate-600 hover:bg-sky-300/50'
                href={'https://github.com/mcalayo/mcalayo.github.io'}
              >
                GitHub
              </Link>
            </button>
            <button onClick={() => handleMenuItemClick(2)} type='button'>
              <Link
                className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[120px] py-2.5 text-center text-sm font-medium text-slate-600 hover:bg-sky-300/50'
                href={'/contact'}
              >
                Contact
              </Link>
            </button>
          </div>

          <button
            className='absolute top-0 left-0 hidden h-[calc(100vh-64px)] w-[calc(100vw-320px)] bg-black opacity-20 sm:block'
            onClick={() => setShowUserMenu(false)}
          ></button>
        </div>
      )}
    </div>
  )
}

export default Navbar
