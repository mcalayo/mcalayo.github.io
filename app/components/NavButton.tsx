'use client'

import { useState } from 'react'
import hamburger from '../../public/images/hamburger.png'
import user from '../../public/images/user.png'
import Image from 'next/image'

type NavButton = {
  type: string
}

const NavButton = (buttonType: NavButton) => {
  // const [showHamburger, setShowHamburger] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleUserClick = () => {
    console.log(showUserMenu, 'first')
    if (showUserMenu) {
      setShowUserMenu(false)
    } else {
      setShowUserMenu(true)
    }
    console.log(showUserMenu, 'second')
  }

  const handleHamburgerClick = () => {
    console.log('borger')
  }

  if (buttonType.type === 'USER') {
    return (
      <div className='flex items-center'>
        <a
          href='/sign-up'
          className='absolute right-15 hidden pr-2 text-blue-500 sm:block'
        >
          sign-up
        </a>
        <button
          className='rounded-lg p-1 hover:bg-sky-300/50'
          onClick={handleUserClick}
        >
          <Image src={user} alt='User' width={24} height={24}></Image>
        </button>
      </div>
    )
  } else if (buttonType.type === 'HAMBURGER') {
    return (
      <button
        className='rounded-lg p-1 hover:bg-sky-300/50'
        onClick={handleHamburgerClick}
      >
        <Image src={hamburger} alt='Hamburger' width={24} height={24}></Image>
      </button>
    )
  }
}

export default NavButton
