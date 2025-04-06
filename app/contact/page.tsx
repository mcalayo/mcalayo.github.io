
import React from "react";
import TypingEffect from "../components/ReactTyping";

export default async function Page() {
  return (
    <section className='mid:p-12 flex flex-col gap-4 p-6'>
      <div className='flex h-[428px] flex-col justify-between gap-12 rounded-2xl bg-sky-300/20 p-2 md:flex-row'>
        <div className='flex h-full w-full flex-col overflow-hidden p-4'>
          <div className='mid:text-l flex pb-1 text-sm font-bold text-slate-600'>
            <TypingEffect messages={[`Let's Connect`]}></TypingEffect>
          </div>
          <p className="scrollbar overflow-auto">
          {`Whether you're reaching out about a project, a potential collaboration, looking to book a DJ, or just want to say hey—I'd love to hear from you.`}
          <br/><br/>
          {`Drop me a message through the form or email me at michaelcalayo@gmail.com. I'll get back to you as soon as I can!`}
          <br/><br/>
          {`Looking forward to connecting.`}
          <br/><br/>
          {`-Michael`}
          </p>
        </div>

        <form className="bg-white p-6 rounded-lg shadow-md mid:w-[600px] w-full h-[412px] mid:block hidden">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4 resize-none"
              maxLength={250}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-sky-700 text-white p-2 rounded hover:bg-sky-800 hover:cursor-pointer"
            >
              Send Message
            </button>
          </form>
      </div>
      <form className="bg-white p-6 rounded-lg shadow-md mid:w-[600px] w-full h-[412px] mid:hidden block">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-2 border border-gray-300 rounded mb-4 resize-none"
              maxLength={250}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-sky-700 text-white p-2 rounded hover:bg-sky-800 hover:cursor-pointer"
            >
              Send Message
            </button>
          </form>
          
    </section>
  )
}


