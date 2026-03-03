'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'

const photos = [
  '/images/gallery/Gallery1.JPG',
  '/images/gallery/Gallery2.JPG',
  '/images/gallery/Gallery3.JPG',
  '/images/gallery/Gallery4.JPG',
  '/images/gallery/Gallery5.JPG',
  '/images/gallery/Gallery6.JPG',
  '/images/gallery/Gallery7.JPG',
  '/images/gallery/Gallery8.JPG',
  '/images/gallery/Gallery9.JPG',
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
      <div className='relative mid:z-[31]' style={{ width: 'min(max(50vw, 300px), 100%)', height: 'clamp(260px, 34vw, 500px)', perspective: '1000px' }}>
        {/* Card 3 — back */}
        <div style={{ position: 'absolute', inset: 0, transform: 'translate(14px, 14px)', borderRadius: 12, overflow: 'hidden', zIndex: 1, opacity: 0.5 }}>
          <Image src={getPhoto(2)} alt='' fill quality={100} style={{ objectFit: 'cover' }} sizes='(min-width: 768px) 50vw, 100vw' />
        </div>

        {/* Card 2 — middle */}
        <div style={{ position: 'absolute', inset: 0, transform: 'translate(7px, 7px)', borderRadius: 12, overflow: 'hidden', zIndex: 2, opacity: 0.75 }}>
          <Image src={getPhoto(1)} alt='' fill quality={100} style={{ objectFit: 'cover' }} sizes='(min-width: 768px) 50vw, 100vw' />
        </div>

        {/* Card 1 — front (animated) */}
        <div
          ref={cardRef}
          onClick={() => animate(1)}
          onTransitionEnd={handleTransitionEnd}
          style={{ position: 'absolute', inset: 0, borderRadius: 12, overflow: 'hidden', zIndex: 3, cursor: 'pointer' }}
        >
          <Image src={getPhoto(0)} alt='' fill quality={100} style={{ objectFit: 'cover' }} sizes='(min-width: 768px) 50vw, 100vw' priority />
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
