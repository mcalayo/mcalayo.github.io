'use client'

interface ResumeButtonProps {
  onClick?: () => void;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({onClick}) => {

  return (
    <button
      className='text-l rounded-full bg-sky-700 px-4 w-full py-1 text-center font-medium text-white hover:cursor-pointer hover:bg-sky-800 focus:outline-none'
      onClick={onClick}
    >
      View Resume
    </button>
  )
}

export default ResumeButton
