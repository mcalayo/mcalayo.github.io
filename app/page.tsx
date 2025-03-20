import React from 'react'
import TypingEffect from './components/ReactTyping'

export default function Home() {
  return (
    <section className='flex p-12'>
      <div className='h-[487px] flex-row justify-between gap-12 rounded-2xl bg-sky-300/20 p-2 md:flex'>
        <div className='flex h-full w-full flex-col overflow-hidden p-4'>
          <div className='flex text-3xl font-bold'>
            <TypingEffect messages={['test']}></TypingEffect>
          </div>
          <p className='flex'>
            Hey there! I&aposm Michael, and when I&aposm not coding or diving
            into creative projects, you&aposll find me pursuing a variety of
            hobbies that keep me inspired and energized. I have a deep love for
            painting, where I enjoy expressing myself through colors and
            brushstrokes. Whether it&aposs abstract art or landscapes, painting
            allows me to relax and tap into my creative side. I&aposm also an
            avid runner and biker—nothing beats the feeling of training for a
            race. Both sports give me a sense of freedom and a chance to clear
            my mind, all while staying healthy. In addition to physical
            activities, making music and DJing are some of my favorite ways to
            express my emotions and connect with others. I love experimenting
            with sounds and rhythms to create unique tracks and share them with
            friends or at local events. When I need to unwind, you&aposll likely
            find me swimming—whether it&aposs in a pool or at the beach,
            swimming is my way of resetting and feeling at peace with the world.
            And of course, I&aposm always exploring new things in the world of
            coding. I&aposm passionate about building projects that solve
            problems, and I&aposm always learning new tools and techniques to
            improve my skills. Each of these activities brings something special
            to my life, and I love how they balance each other out—creativity,
            adventure, and technology all wrapped into one. Feel free to reach
            out if you&aposd like to connect over any of these interests, or
            just chat about what&aposs next on the horizon!
          </p>
        </div>
        <iframe
          src='https://open.spotify.com/embed/artist/3svCtW3c7D7OC51qvskpwa?utm_source=generator'
          width='500'
          height='471'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
          className='flex'
        ></iframe>
      </div>
    </section>
  )
}
