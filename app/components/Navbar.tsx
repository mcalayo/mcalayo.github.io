import NavButton from './NavButton'

const Navbar = () => {
  return (
    <div className='grid h-12 grid-flow-col grid-rows-1 items-center justify-between border-b border-black px-6'>
      <NavButton type={'HAMBURGER'}></NavButton>
      <a href='/' className='text-4xl font-bold'>
        Michael Calayo
      </a>
      <NavButton type={'USER'}></NavButton>
    </div>
  )
}

export default Navbar
