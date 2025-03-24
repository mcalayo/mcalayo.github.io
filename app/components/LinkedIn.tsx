'use client'
import React from 'react'
import LinkedInLogo from '../../public/images/linkedin.png'
import Image from 'next/image'
import profilePicutre from '../../public/images/linkedInpfp.jpg'
import Link from 'next/link'

export default function LinkedIn() {
  return (
    <div>
      <div className='flex bg-gray-200 p-3 border-slate-400 border-b-1 rounded-t-xl'>
        <Image src={LinkedInLogo} alt='LinkedInLogo' width={96} height={96}></Image>
      </div>
      <div className='flex flex-col p-4 bg-white rounded-b-xl h-52 linkedin-lg:h-48 gap-1'>
        <Image src={profilePicutre} alt='LinkedInPFP' width={64} height={64} className='rounded-full'></Image>
        <div>
          <p className='text-slate-600 font-medium'>Michael Calayo</p>
          <p className='text-xs'>Software Engineer</p>
          <p className='text-xs'>CoStar Group | James Madison University</p>
          <button className='mt-4'
          >
            <Link
              className='text-l rounded-full bg-sky-700 px-4 py-1 mt-2 text-center font-medium text-white hover:cursor-pointer hover:bg-sky-800 focus:outline-none'
              href={'https://linkedin.com/in/michaelcalayo'}
              target='blank'
            >
              View Profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}