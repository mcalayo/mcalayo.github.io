'use client'

// import { useState } from 'react'

const ResumeButton = () => {
  //   const [showResume, setShowResume] = useState(false)

  return (
    <button
      className='text-l me-2 mb-2 rounded-full bg-blue-700 px-4 py-1 text-center font-medium text-white hover:cursor-pointer hover:bg-blue-800 focus:outline-none'
      onClick={() => console.log('buttonclick')}
    >
      View Resume
    </button>
  )
}

export default ResumeButton
