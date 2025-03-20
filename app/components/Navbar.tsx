import Link from 'next/link'
import NavButton from './NavButton'

const Navbar = () => {
  return (
    <div className='grid h-16 grid-flow-col grid-rows-1 items-center justify-between border-b border-black px-6'>
      <NavButton type={'HAMBURGER'}></NavButton>
      <Link href='/' className='text-4xl font-bold'>
        Michael Calayo
      </Link>
      <NavButton type={'USER'}></NavButton>
    </div>
  )
}

export default Navbar
