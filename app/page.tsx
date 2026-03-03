'use client'

import React, { useState } from 'react'
import TypingEffect from './components/ReactTyping'
import GitHub from './components/GitHub'
import LinkedIn from './components/LinkedIn'
import Resume from './components/Resume'
import PhotoGallery from './components/PhotoGallery'
import TicTacToe from './components/TicTacToe'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'AWS', 'Tailwind CSS', 'Jest', 'Cypress', 'CI/CD',
]

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  return (
    <>
      <section id='home' className='mid:px-12 mid:py-16 flex flex-col gap-4 px-6 py-10'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex flex-1 flex-col gap-5 overflow-hidden'>
            <div>
              <div className='flex text-xs font-semibold tracking-widest text-sky-400 uppercase mb-2'>
                <TypingEffect messages={['Welcome to my page']}></TypingEffect>
              </div>
              <h1 className='text-3xl font-bold text-slate-100 leading-tight'>Hey, I&apos;m Michael</h1>
              <p className='text-slate-400 text-sm mt-1'>Full Stack Engineer</p>
            </div>
            <p className='scrollbar overflow-auto text-slate-300 text-sm leading-relaxed max-h-72 mid:max-h-none'>
              {`Hey! I'm Michael. When I'm not coding or working on creative projects, I'm usually diving into a few hobbies that keep me feeling inspired and energized.`}
              <br /><br />
              {`I've got a real passion for painting—it's my way of expressing myself with colors and brushstrokes. Whether I'm working on abstract pieces or landscapes, it's a great way for me to unwind and tap into my creative side.`}
              <br /><br />
              {`I'm also a big fan of running and biking. There's something about training for a race that just clicks with me. Both sports give me this awesome sense of freedom, plus it's a great way to clear my head and stay active.
              When I need to chill, you'll probably find me swimming—whether it's in a pool or out at the beach. It's my go-to way to reset and just feel at peace.`}
              <br /><br />
              {`Music and DJing are another way I love expressing myself. I enjoy experimenting with different sounds and rhythms to create unique tracks. It's a blast sharing them with friends or spinning at local events.`}
              <br /><br />
              {`And of course, I'm always exploring new things in the world of coding. I love building projects that solve real problems, and I'm always learning new tools to sharpen my skills.`}
              <br /><br />
              {`All of these activities bring something special to my life. They balance each other out—creativity, adventure, and technology. If any of these interests resonate with you, or if you just want to chat about what's next, feel free to reach out!`}
            </p>
          </div>
          <iframe
            src='https://open.spotify.com/embed/artist/3svCtW3c7D7OC51qvskpwa?utm_source=generator'
            width='300'
            height='352'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
            className='mid:block hidden flex-shrink-0 shadow-md rounded-xl self-start'
          ></iframe>
        </div>
        <iframe
          src='https://open.spotify.com/embed/artist/3svCtW3c7D7OC51qvskpwa?utm_source=generator'
          width='100%'
          height='352'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
          className='mid:hidden shadow-md rounded-xl'
        ></iframe>
      </section>

      <section id='about' className='mid:px-12 mid:py-16 flex flex-col gap-4 px-6 py-10'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex flex-1 flex-col gap-5 overflow-hidden'>
            <div>
              <div className='flex text-xs font-semibold tracking-widest text-sky-400 uppercase mb-2'>
                <TypingEffect messages={['Professional Experience']}></TypingEffect>
              </div>
              <h2 className='text-2xl font-bold text-slate-100'>About Me</h2>
            </div>
            <p className='scrollbar overflow-auto text-slate-300 text-sm leading-relaxed'>
              {`I am a Full Stack Software Engineer specializing in React, Next.js, TypeScript, and AWS, with a passion for building high-performance, scalable web applications. Focused on creating seamless user experiences and optimizing UI through modern design principles and agile methodologies.`}
              <br /><br />
              {`My experience at CoStar Group includes designing and developing server-side rendered applications with a strong emphasis on SEO optimization and reusable component architecture. I worked on integrating automated testing frameworks like Jest and Cypress, improving website indexing for large-scale content, and leading the development of UI features using Tailwind CSS. I also played a key role in launching new digital experiences, enhancing content accessibility, and optimizing API endpoints for better performance.`}
              <br /><br />
              {`With AWS Cloud Practitioner and AWS AI Practitioner certifications, I have expertise in API development, cloud technologies, deploying AI models, and CI/CD pipelines. I am passionate about building intuitive, efficient, and scalable applications that enhance user engagement and business impact.`}
              <br /><br />
              {`Let's `}<a className='text-sky-400 underline hover:text-sky-300' href='#contact'>connect</a>{` and create something amazing together!`}
            </p>
            <div className='flex flex-wrap gap-2 pt-2'>
              {skills.map(skill => (
                <span key={skill} className='text-xs px-3 py-1 rounded-full bg-sky-950/60 text-sky-300 border border-sky-800/50'>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className='mid:flex hidden w-[300px] flex-shrink-0 flex-col gap-3'>
            <LinkedIn></LinkedIn>
            <GitHub></GitHub>
            <Resume></Resume>
          </div>
        </div>
        <div className='mid:hidden flex w-full flex-col gap-3'>
          <LinkedIn></LinkedIn>
          <GitHub></GitHub>
          <Resume></Resume>
        </div>
      </section>

      <section id='contact' className='mid:px-12 mid:py-16 flex flex-col gap-4 px-6 py-10'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex flex-1 flex-col gap-5 overflow-hidden'>
            <div>
              <div className='flex text-xs font-semibold tracking-widest text-sky-400 uppercase mb-2'>
                <TypingEffect messages={[`Let's Connect`]}></TypingEffect>
              </div>
              <h2 className='text-2xl font-bold text-slate-100'>Get In Touch</h2>
            </div>
            <p className='text-slate-300 text-sm leading-relaxed'>
              {`Whether you're reaching out about a project, a potential collaboration, looking to book a DJ, or just want to say hey, I'd love to hear from you.`}
              <br /><br />
              {`Drop me a message through the form and I'll get back to you as soon as I can!`}
              <br /><br />
              {`Looking forward to connecting.`}
              <br /><br />
              {`-Michael`}
            </p>
          </div>
          <div className='relative flex flex-1 flex-col rounded-xl bg-slate-800/50 border border-slate-700/40 p-6'>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                setFormError(null)
                setLoading(true)
                const fd = new FormData(e.currentTarget)
                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      name: fd.get('name'),
                      email: fd.get('email'),
                      message: fd.get('message'),
                      _hp: fd.get('_hp'),
                    }),
                  })
                  const data = await res.json()
                  if (!res.ok) {
                    setFormError(data.error ?? 'Something went wrong. Please try again.')
                  } else {
                    setSubmitted(true)
                  }
                } catch {
                  setFormError('Something went wrong. Please try again.')
                } finally {
                  setLoading(false)
                }
              }}
              className={`flex flex-col gap-3 ${submitted ? 'invisible' : ''}`}
            >
              <h3 className='text-lg font-semibold text-slate-100 mb-1'>Send a Message</h3>
              {/* Honeypot — hidden from real users, bots will fill it */}
              <input type='text' name='_hp' tabIndex={-1} autoComplete='off' style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }} />
              <input type='text' name='name' placeholder='Your Name' required className='w-full p-2.5 bg-slate-700/40 border border-slate-600/60 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-sky-500/70 transition-colors text-sm' />
              <input type='email' name='email' placeholder='Your Email' required className='w-full p-2.5 bg-slate-700/40 border border-slate-600/60 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-sky-500/70 transition-colors text-sm' />
              <textarea name='message' rows={5} placeholder='Your Message' required className='w-full p-2.5 bg-slate-700/40 border border-slate-600/60 rounded-lg resize-none text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-sky-500/70 transition-colors text-sm' maxLength={250}></textarea>
              {formError && <p className='text-red-400 text-xs'>{formError}</p>}
              <button type='submit' disabled={loading} className='w-full px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'>
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
            {submitted && (
              <div className='absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-6'>
                <p className='text-slate-100 font-semibold text-lg'>Thank you for getting in touch!</p>
                <p className='text-slate-400 text-sm'>I&apos;ll get back to you soon!</p>
                <button onClick={() => setSubmitted(false)} className='px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer'>Send another message</button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section id='gallery' className='mid:px-12 mid:py-16 flex flex-col gap-4 px-6 py-10'>
        <div>
          <div className='flex text-xs font-semibold tracking-widest text-sky-400 uppercase mb-2'>
            <TypingEffect messages={['Gallery']}></TypingEffect>
          </div>
          <h2 className='text-2xl font-bold text-slate-100'>Photos</h2>
        </div>
        <p className='text-slate-300 text-sm leading-relaxed'>
          {`A collection of moments from life outside of code.`}
        </p>
        <PhotoGallery />
      </section>

      <section id='interactive' className='mid:px-12 mid:py-16 flex flex-col gap-4 px-6 py-10 pb-96 mid:pb-[20rem]'>
        <div>
          <div className='flex text-xs font-semibold tracking-widest text-sky-400 uppercase mb-2'>
            <TypingEffect messages={['Interactive']}></TypingEffect>
          </div>
          <h2 className='text-2xl font-bold text-slate-100'>Tic Tac Toe</h2>
        </div>
        <p className='text-slate-300 text-sm leading-relaxed'>
          {`You're X and the computer is O, it plays a pretty good game. Good luck!`}
        </p>
        <TicTacToe />
      </section>
    </>
  )
}
