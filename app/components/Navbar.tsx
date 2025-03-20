'use client'

import Link from 'next/link'
import NavButton from './NavButton'

const Navbar = () => {
  return (
    <div className='grid h-16 grid-flow-col grid-rows-1 items-center justify-between border-b border-black px-6'>
      <div className='z-10'>
        <NavButton type={'HAMBURGER'}></NavButton>
      </div>
      <div className='absolute top-16 left-0 flex h-screen w-screen flex-col overflow-hidden bg-sky-200 px-4 py-6 sm:w-80'>
        <button
          type='button'
          className='me-2 mb-2 rounded-full bg-sky-300/20 px-5 py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
        >
          <Link href='/'>Home</Link>
        </button>
        <button
          type='button'
          className='me-2 mb-2 rounded-full bg-sky-300/20 px-5 py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
        >
          <Link href='/about'>About</Link>
        </button>
        <button
          type='button'
          className='me-2 mb-2 rounded-full bg-sky-300/20 px-5 py-2.5 text-center text-sm font-medium text-slate-500 hover:bg-sky-300/50'
        >
          Music
        </button>
      </div>

      <Link href='/' className='xs:text-4xl text-2xl font-bold'>
        Michael Calayo
      </Link>
      <NavButton type={'USER'}></NavButton>
      {/* <div className='absolute right-0 h-screen w-80 overflow-hidden bg-sky-300'></div> */}
    </div>
  )
}

export default Navbar
