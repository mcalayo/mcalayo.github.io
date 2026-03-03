export default function AuroraBackground() {
  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
      <div className='aurora-1' style={{ position: 'absolute', top: '-100px', left: '-100px', width: '700px', height: '700px', borderRadius: '50%', background: 'rgba(91, 14, 233, 0.1)', filter: 'blur(110px)' }} />
      <div className='aurora-2' style={{ position: 'absolute', top: '10%', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(0, 255, 255, 0.1)', filter: 'blur(110px)' }} />
      <div className='aurora-3' style={{ position: 'absolute', bottom: '-100px', left: '20%', width: '700px', height: '700px', borderRadius: '50%', background: 'rgba(23, 214, 214, 0.1)', filter: 'blur(110px)' }} />
      <div className='aurora-4' style={{ position: 'absolute', top: '60%', left: '50%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(18, 1, 255, 0.1)', filter: 'blur(110px)' }} />
    </div>
  )
}
