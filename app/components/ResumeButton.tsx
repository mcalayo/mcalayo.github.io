'use client'

// import { useState } from 'react'

const ResumeButton = () => {
  //   const [showResume, setShowResume] = useState(false)

  return (
    <button
      className='me-2 mb-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:cursor-pointer hover:bg-blue-800 focus:outline-none'
      onClick={() => console.log('buttonclick')}
    >
      View Resume
    </button>
  )
}

export default ResumeButton
