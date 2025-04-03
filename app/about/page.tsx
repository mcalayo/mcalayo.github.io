import GitHub from '../components/GitHub'
import LinkedIn from '../components/LinkedIn'
import TypingEffect from '../components/ReactTyping'
import Resume from '../components/Resume'

export default async function Page() {
  return (
    <section className='mid:p-12 flex flex-col gap-4 p-6'>
      <div className='flex h-[453px] flex-col justify-between gap-12 rounded-2xl bg-sky-300/20 p-2 md:flex-row'>
        <div className='flex h-full w-full flex-col overflow-hidden p-4'>
          <div className='mid:text-l flex pb-1 text-sm font-bold text-slate-600'>
            <TypingEffect messages={['Professional Experience']}></TypingEffect>
          </div>
          <p className="scrollbar flex overflow-auto">
            {`I am a Full Stack Software Engineer specializing in React, Next.js, TypeScript, and AWS, with a passion for building high-performance, scalable web applications. Focused on creating seamless user experiences and optimizing UI through modern design principles and agile methodologies.`}
            <br/><br/>
            {`My experience at CoStar Group includes designing and developing server-side rendered applications with a strong emphasis on SEO optimization and reusable component architecture. I worked on integrating automated testing frameworks like Jest and Cypress, improving website indexing for large-scale content, and leading the development of UI features using Tailwind CSS. I also played a key role in launching new digital experiences, enhancing content accessibility, and optimizing API endpoints for better performance.`}
            <br/><br/>
            {`With an AWS Cloud Practitioner certification, I have expertise in API development, cloud technologies, and CI/CD pipelines. I am passionate about building intuitive, efficient, and scalable applications that enhance user engagement and business impact.`}
            <br/><br/>
            {`Let's connect and create something amazing together!`}
          </p>
        </div>

        <div className='mid:flex hidden h-[468px] w-[350px] flex-col gap-2 rounded-xl'>
          <LinkedIn></LinkedIn>
          <GitHub></GitHub>
          <Resume></Resume>
        </div>
      </div>
      <div className='mid:hidden flex h-[468px] w-full flex-col gap-2 rounded-xl'>
        <LinkedIn></LinkedIn>
        <GitHub></GitHub>
        <Resume></Resume>
      </div>
    </section>
  )
}
