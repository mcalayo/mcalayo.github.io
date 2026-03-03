'use client'
import React, { useRef, useState } from 'react'

const photos = [
  { id: 1, bg: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)', label: 'Photo 1' },
  { id: 2, bg: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)', label: 'Photo 2' },
  { id: 3, bg: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', label: 'Photo 3' },
  { id: 4, bg: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', label: 'Photo 4' },
  { id: 5, bg: 'linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)', label: 'Photo 5' },
  { id: 6, bg: 'linear-gradient(135deg, #f43f5e 0%, #8b5cf6 100%)', label: 'Photo 6' },
]

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const phaseRef = useRef<'out' | 'in' | null>(null)
  const dirRef = useRef<1 | -1>(1)

  const animate = (dir: 1 | -1) => {
    if (phaseRef.current || !cardRef.current) return
    dirRef.current = dir
    phaseRef.current = 'out'
    cardRef.current.style.transition = 'transform 0.22s ease-in'
    cardRef.current.style.transform = dir === 1 ? 'rotateY(-90deg)' : 'rotateY(90deg)'
  }

  const handleTransitionEnd = () => {
    if (!cardRef.current) return
    if (phaseRef.current === 'out') {
      const dir = dirRef.current
      setCurrent(prev => (prev + dir + photos.length) % photos.length)
      phaseRef.current = 'in'
      cardRef.current.style.transition = 'none'
      cardRef.current.style.transform = dir === 1 ? 'rotateY(90deg)' : 'rotateY(-90deg)'
      void cardRef.current.offsetWidth // force reflow so the instant reset is painted before the transition
      cardRef.current.style.transition = 'transform 0.22s ease-out'
      cardRef.current.style.transform = 'rotateY(0deg)'
    } else if (phaseRef.current === 'in') {
      phaseRef.current = null
    }
  }

  const getPhoto = (offset: number) => photos[(current + offset + photos.length) % photos.length]

  return (
    <div className='flex flex-col items-center gap-6'>
      {/* Card stack */}
      <div className='relative' style={{ width: 'min(max(50vw, 300px), 100%)', height: 'clamp(260px, 34vw, 500px)', perspective: '1000px' }}>
        {/* Card 3 — back */}
        <div style={{
          position: 'absolute', inset: 0,
          transform: 'translate(14px, 14px)',
          borderRadius: 12, overflow: 'hidden', zIndex: 1,
          background: getPhoto(2).bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span className='text-white/30 text-sm font-medium select-none'>{getPhoto(2).label}</span>
        </div>

        {/* Card 2 — middle */}
        <div style={{
          position: 'absolute', inset: 0,
          transform: 'translate(7px, 7px)',
          borderRadius: 12, overflow: 'hidden', zIndex: 2,
          background: getPhoto(1).bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span className='text-white/40 text-sm font-medium select-none'>{getPhoto(1).label}</span>
        </div>

        {/* Card 1 — front (animated) */}
        <div
          ref={cardRef}
          onClick={() => animate(1)}
          onTransitionEnd={handleTransitionEnd}
          style={{
            position: 'absolute', inset: 0,
            borderRadius: 12, overflow: 'hidden', zIndex: 3,
            background: getPhoto(0).bg,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span className='text-white/70 text-lg font-semibold select-none'>{getPhoto(0).label}</span>
        </div>
      </div>

      {/* Controls */}
      <div className='flex items-center gap-4'>
        <button
          onClick={() => animate(-1)}
          className='px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer'
        >
          ← Prev
        </button>
        <span className='text-slate-400 text-sm'>{current + 1} / {photos.length}</span>
        <button
          onClick={() => animate(1)}
          className='px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer'
        >
          Next →
        </button>
      </div>
    </div>
  )
}
