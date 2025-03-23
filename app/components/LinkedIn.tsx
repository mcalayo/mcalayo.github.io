'use client'
import React from 'react'
import LinkedInLogo from '../../public/images/linkedin.png'
import Image from 'next/image'

export default function LinkedIn() {
  return (
    <div>
      <div className='flex h-[468px] w-[350px] flex-col rounded-xl bg-black'>
        <div className='flex bg-[#395572] p-3'>
          <Image src={LinkedInLogo} alt='User' width={96} height={96}></Image>
        </div>
        <div className='flex bg-red-500'>r</div>
      </div>
      <>
        <script
          src='https://platform.linkedin.com/badges/js/profile.js'
          async
          defer
          type='text/javascript'
        ></script>
        <div
          className='badge-base LI-profile-badge'
          data-locale='en_US'
          data-size='large'
          data-theme='light'
          data-type='VERTICAL'
          data-vanity='michaelcalayo'
          data-version='v1'
        ></div>
      </>
    </div>
  )
}
