'use client'
import React from 'react'
import GitHubLogo from '../../public/images/githublogo.png'
import GitHubLogoText from '../../public/images/github.png'
import Image from 'next/image'
import Link from 'next/link'

export default function GitHub() {
  return (
    <div>
      <div className='flex bg-gray-200 p-3 border-slate-400 border-b-1 rounded-t-xl items-center'>
        <Image src={GitHubLogo} alt='GitHubLogo' width={28} height={24}></Image>
        <Image src={GitHubLogoText} alt='GitHubLogoText' height={28}></Image>
      </div>
      <div className='flex flex-col p-4 bg-white rounded-b-xl h-24 gap-1'>
        <div>
          <p className='text-slate-600 font-medium'>mcalayo</p>
          <button className='mt-4'
          >
            <Link
              className='text-l rounded-full bg-sky-700 px-4 py-1 mt-2 text-center font-medium text-white hover:cursor-pointer hover:bg-sky-800 focus:outline-none'
              href={'https://github.com/mcalayo'}
            >
              View Profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}