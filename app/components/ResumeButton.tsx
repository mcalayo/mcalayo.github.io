'use client'

interface ResumeButtonProps {
  onClick?: () => void;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ onClick }) => {

  return (
    <button
      className='w-full px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer'
      onClick={onClick}
    >
      View Resume
    </button>
  )
}

export default ResumeButton
