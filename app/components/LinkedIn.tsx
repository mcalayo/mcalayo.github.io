'use client'
import React from 'react'
import LinkedInLogo from '../../public/images/linkedin.png'
import Image from 'next/image'
import profilePicutre from '../../public/images/linkedInpfp.jpg'
import Link from 'next/link'

export default function LinkedIn() {
  return (
    <div>
      <div className='flex rounded-t-xl border-b-1 border-slate-400 bg-gray-200 p-3'>
        <Image
          src={LinkedInLogo}
          alt='LinkedInLogo'
          width={96}
          height={96}
        ></Image>
      </div>
      <div className='linkedin-lg:h-48 flex h-52 flex-col gap-1 rounded-b-xl bg-white p-4'>
        <Image
          src={profilePicutre}
          alt='LinkedInPFP'
          width={64}
          height={64}
          className='rounded-full'
        ></Image>
        <div>
          <p className='font-medium text-slate-600'>Michael Calayo</p>
          <p className='text-xs'>Software Engineer</p>
          <p className='text-xs'>CoStar Group | James Madison University</p>
          <button className='mt-4'>
            <Link
              className='text-l mt-2 rounded-full bg-sky-700 px-4 py-1 text-center font-medium text-white hover:cursor-pointer hover:bg-sky-800 focus:outline-none'
              href={'https://linkedin.com/in/michaelcalayo'}
            >
              View Profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
