'use client'

import hamburger from '../../public/images/hamburger.png'
import user from '../../public/images/user.png'
import Image from 'next/image'

type NavButtonProps = {
  buttonType: string
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
}

const NavButton: React.FC<NavButtonProps> = ({
  buttonType,
  onClickHandler
}) => {
  if (buttonType === 'USER') {
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
          onClick={onClickHandler}
        >
          <Image src={user} alt='User' width={24} height={24}></Image>
        </button>
      </div>
    )
  } else if (buttonType === 'HAMBURGER') {
    return (
      <button
        className='rounded-lg p-1 hover:bg-sky-300/50'
        onClick={onClickHandler}
      >
        <Image src={hamburger} alt='Hamburger' width={24} height={24}></Image>
      </button>
    )
  }
}

export default NavButton
