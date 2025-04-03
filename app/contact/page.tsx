
import React from "react";

export default async function Page() {
  return (
    <section className='p-12'>
      <div className="flex justify-center items-center h-[calc(100vh-160px)] bg-sky-300/20 rounded-2xl p-2">
        <form className="bg-white p-6 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
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

    </section>
  )
}


