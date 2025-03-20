'use client'
import React from 'react'

export default function LinkedIn() {
  return (
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
        data-type='HORIZONTAL'
        data-vanity='michaelcalayo'
        data-version='v1'
      ></div>
    </>
  )
}
