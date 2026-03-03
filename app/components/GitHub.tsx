'use client'
import React from 'react'
import GitHubLogo from '../../public/images/githublogo.png'
import GitHubLogoText from '../../public/images/github.png'
import Image from 'next/image'
import Link from 'next/link'

export default function GitHub() {
  return (
    <div className='rounded-xl bg-slate-800/50 border border-slate-700/40 shadow-md overflow-hidden'>
      <div className='flex items-center border-b border-slate-700/40 bg-slate-700/30 p-3'>
        <Image src={GitHubLogo} alt='GitHubLogo' width={28} height={24}></Image>
        <Image src={GitHubLogoText} alt='GitHubLogoText' height={28}></Image>
      </div>
      <div className='flex h-24 flex-col gap-1 p-4'>
        <div>
          <p className='font-medium text-slate-200'>mcalayo</p>
          <button className='mt-4'>
            <Link
              className='px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer'
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
