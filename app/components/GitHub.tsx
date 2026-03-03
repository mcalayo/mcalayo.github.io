'use client'
import React from 'react'
import GitHubLogo from '../../public/images/githublogo.png'
import GitHubLogoText from '../../public/images/github.png'
import Image from 'next/image'
import Link from 'next/link'

export default function GitHub() {
  return (
    <div className='shadow-md rounded-xl'>
      <div className='flex items-center rounded-t-xl border-b border-slate-600 bg-slate-700 p-3'>
        <Image src={GitHubLogo} alt='GitHubLogo' width={28} height={24}></Image>
        <Image src={GitHubLogoText} alt='GitHubLogoText' height={28}></Image>
      </div>
      <div className='flex h-24 flex-col gap-1 rounded-b-xl bg-slate-800 p-4'>
        <div>
          <p className='font-medium text-slate-200'>mcalayo</p>
          <button className='mt-4'>
            <Link
              className='text-l mt-2 rounded-full bg-sky-600 px-4 py-1 text-center font-medium text-white hover:cursor-pointer hover:bg-sky-500 focus:outline-none transition-colors'
              href={'https://github.com/mcalayo/mcalayo.github.io'}
            >
              View Profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
