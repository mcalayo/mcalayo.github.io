'use client'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ResumeButton from './ResumeButton'
import Image from 'next/image'
import ResumeIMG from '../../public/images/MichaelCalayoResumePNG.png'

const Resume = () => {
  const [showResume, setShowResume] = useState(false)

  const onClickHandler = () => {
    setShowResume(true)
    document.body.style.overflow = 'hidden'
  }

  const onCloseHandler = () => {
    setShowResume(false)
    document.body.style.overflow = ''
  }

  return (
    <div>
      <ResumeButton onClick={onClickHandler} />
      {showResume && createPortal(
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]'
            onClick={onCloseHandler}
          />
          {/* Modal */}
          <div className='fixed top-4 mid:top-8 left-1/2 -translate-x-1/2 shadow-2xl z-[70]'>
            <Image src={ResumeIMG} alt='Resume' className='max-h-[90vh] w-auto' />
          </div>
        </>,
        document.body
      )}
    </div>
  )
}

export default Resume
