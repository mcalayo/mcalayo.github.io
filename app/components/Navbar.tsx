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
      setShowHamburgerMenu(true)
    }
  }

  function handleUserClick(): void {
    if (showUserMenu) {
      setShowUserMenu(false)
    } else {
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
    <div className='grid h-16 grid-flow-col grid-rows-1 items-center justify-between border-b border-black px-6'>
      <div className='z-10'>
        <NavButton
          onClickHandler={handleHamburgerClick}
          buttonType={'HAMBURGER'}
        ></NavButton>
      </div>
      {showHamburgerMenu && (
        <div className='absolute top-16 left-0 flex h-[calc(100vh-64px)] w-screen flex-col gap-y-6 overflow-hidden bg-sky-100 px-4 py-6 sm:w-80'>
          <button onClick={() => handleMenuItemClick(1)} type='button'>
            <Link
              className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[124px] py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
              href={'/'}
            >
              Home
            </Link>
          </button>
          <button onClick={() => handleMenuItemClick(1)} type='button'>
            <Link
              className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[124px] py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
              href={'/about'}
            >
              About
            </Link>
          </button>
          <button onClick={() => handleMenuItemClick(1)} type='button'>
            <Link
              className='mb-2 w-10 cursor-pointer rounded-full bg-sky-300/20 px-[124px] py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
              href={'/music'}
            >
              Music
            </Link>
          </button>
        </div>
      )}

      <Link href='/' className='xs:text-4xl text-2xl font-bold'>
        Michael Calayo
      </Link>
      <NavButton
        onClickHandler={handleUserClick}
        buttonType={'USER'}
      ></NavButton>
      {showUserMenu && (
        <div className='absolute top-16 right-0 flex h-[calc(100vh-64px)] w-screen flex-col overflow-hidden bg-sky-100 px-4 py-6 sm:w-80'>
          <button
            onClick={() => handleMenuItemClick(2)}
            type='button'
            className='me-2 mb-2 cursor-pointer rounded-full bg-sky-300/20 px-5 py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
          >
            Log-In
          </button>
          <button
            onClick={() => handleMenuItemClick(2)}
            type='button'
            className='me-2 mb-2 cursor-pointer rounded-full bg-sky-300/20 px-5 py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
          >
            Profile
          </button>
          <button
            onClick={() => handleMenuItemClick(3)}
            type='button'
            className='me-2 mb-2 cursor-pointer rounded-full bg-sky-300/20 px-5 py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
          >
            Log-Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar
