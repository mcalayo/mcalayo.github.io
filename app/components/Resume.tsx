'use client'
import React, { useState } from 'react'
import ResumeButton from './ResumeButton';
import Image from 'next/image';
import ResumeIMG from '../../public/images/Michael-Calayo.png'

const Resume = () => {

  const [showResume, setShowResume] = useState(false);

  const onClickHandler = () => {
    setShowResume(true)
    window.scrollTo(0,0)
  }

  return (<div>
    <ResumeButton onClick={onClickHandler}></ResumeButton>
    {showResume && (
      <div className='absolute bg-white left-0 mid:left-12 top-16 mid:top-28 h-full mid:rounded-3xl w-full overflow-auto mid:h-[calc(100vh-160px)] resume-scrollbar mid:w-[calc(100vw-96px)]'>
        <button className='absolute right-6 top-6 hover:bg-gray-200 w-6 h-6 rounded-full' onClick={() => setShowResume(false)}>X</button>
        <Image width={0} height={0} src={ResumeIMG} alt={'Resume'}></Image>
      </div>)}
  </div>
  )
}

export default Resume
