export default function AuroraBackground() {
  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
      <div className='aurora-1' style={{ position: 'absolute', top: '-100px', left: '-100px', width: '700px', height: '700px', borderRadius: '50%', background: 'rgba(47, 206, 255, 0.2)', filter: 'blur(110px)', mixBlendMode: 'screen' }} />
      <div className='aurora-2' style={{ position: 'absolute', top: '10%', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(23, 182, 255, 0.2)', filter: 'blur(110px)', mixBlendMode: 'screen' }} />
      <div className='aurora-3' style={{ position: 'absolute', bottom: '-100px', left: '17%', width: '700px', height: '700px', borderRadius: '50%', background: 'rgba(50, 105, 255, 0.2)', filter: 'blur(110px)', mixBlendMode: 'screen' }} />
      <div className='aurora-4' style={{ position: 'absolute', top: '60%', left: '70%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(34, 211, 238, 0.2)', filter: 'blur(110px)', mixBlendMode: 'screen' }} />
      <div className='aurora-5' style={{ position: 'absolute', top: '-150px', left: '40%', width: '650px', height: '650px', borderRadius: '50%', background: 'rgba(57, 60, 243, 0.2)', filter: 'blur(110px)', mixBlendMode: 'screen' }} />
    </div>
  )
}
