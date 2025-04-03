import React from 'react'
import TypingEffect from './components/ReactTyping'

export default function Home() {
  return (
    <section className='mid:p-12 flex flex-col gap-4 p-6'>
      <div className='flex h-[572px] flex-col justify-between gap-12 rounded-2xl bg-sky-300/20 p-2 md:flex-row'>
        <div className='flex h-full w-full flex-col overflow-hidden p-4'>
          <div className='mid:text-l flex pb-1 text-sm font-bold text-slate-600'>
            <TypingEffect messages={['Welcome to my page']}></TypingEffect>
          </div>
          <p className='scrollbar flex overflow-auto'>
            {`Hey! I'm Michael. When I'm not coding or working on creative projects, I'm usually diving into a few hobbies that keep me feeling inspired and energized.`}
            <br/><br/>
            {`I've got a real passion for painting—it's my way of expressing myself with colors and brushstrokes. Whether I'm working on abstract pieces or landscapes, it's a great way for me to unwind and tap into my creative side.`}
            <br/><br/>
            {`I'm also a big fan of running and biking. There's something about training for a race that just clicks with me. Both sports give me this awesome sense of freedom, plus it's a great way to clear my head and stay active.
            When I need to chill, you'll probably find me swimming—whether it's in a pool or out at the beach. It's my go-to way to reset and just feel at peace.`}
            <br/><br/>
            {`Music and DJing are another way I love expressing myself. I enjoy experimenting with different sounds and rhythms to create unique tracks. It's a blast sharing them with friends or spinning at local events.`}
            <br/><br/>
            {`And of course, I'm always exploring new things in the world of coding. I love building projects that solve real problems, and I'm always learning new tools to sharpen my skills.`}
            <br/><br/>
            {`All of these activities bring something special to my life. They balance each other out—creativity, adventure, and technology. If any of these interests resonate with you, or if you just want to chat about what's next, feel free to reach out!`}
          </p>

        </div>
        <iframe
          src='https://open.spotify.com/embed/artist/3svCtW3c7D7OC51qvskpwa?utm_source=generator'
          width='350'
          height='556'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
          className='mid:block hidden shadow-md rounded-xl'
        ></iframe>
      </div>
      <iframe
        src='https://open.spotify.com/embed/artist/3svCtW3c7D7OC51qvskpwa?utm_source=generator'
        width='100%'
        height='556'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
        className='mid:hidden shadow-md rounded-xl'
      ></iframe>
    </section>
  )
}
