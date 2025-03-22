'use client'
import React from 'react'

export default function LinkedIn() {
  return (
    <div>
      <div className='h-[468px] w-[350px] rounded-xl bg-black'>t</div>
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
