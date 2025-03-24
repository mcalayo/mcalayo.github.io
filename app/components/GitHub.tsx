'use client'
import React from 'react'
import GitHubLogo from '../../public/images/githublogo.png'
import GitHubLogoText from '../../public/images/github.png'
import Image from 'next/image'
import Link from 'next/link'

export default function GitHub() {
  return (
    <div>
      <div className='flex items-center rounded-t-xl border-b-1 border-slate-400 bg-gray-200 p-3'>
        <Image src={GitHubLogo} alt='GitHubLogo' width={28} height={24}></Image>
        <Image src={GitHubLogoText} alt='GitHubLogoText' height={28}></Image>
      </div>
      <div className='flex h-24 flex-col gap-1 rounded-b-xl bg-white p-4'>
        <div>
          <p className='font-medium text-slate-600'>mcalayo</p>
          <button className='mt-4'>
            <Link
              className='text-l mt-2 rounded-full bg-sky-700 px-4 py-1 text-center font-medium text-white hover:cursor-pointer hover:bg-sky-800 focus:outline-none'
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
