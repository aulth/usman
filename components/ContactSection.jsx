import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { ImUser } from 'react-icons/im'
import {MdAlternateEmail} from 'react-icons/md'
const ContactSection = () => {
  return (
    <div className="container md:p-12 px-2   flex flex-col-reverse md:flex-row justify-center md:min-h-[calc(100vh-60px)]">
      <div className="w-full p-8">
        <h2 className="text-left font-semibold md:text-3xl text-2xl text-white">Love to hear from you,</h2>
        <h2 className="text-left font-semibold md:text-3xl text-2xl text-white ">Get in touch 👋</h2>
        <form className="w-full mt-8">
          <div className="w-full flex gap-2 flex-col md:flex-row">
            <div className="w-full  md:w-1/2 flex items-center border-b border-gray-400">
              <div className="bg-gray-400 p-1">
                <ImUser className='text-2xl' />
              </div>
              <input type="text" className='w-full p-1 focus:outline-none border-none bg-transparent' placeholder='Your name' />
            </div>
            <div className="w-full md:w-1/2 flex border-b border-gray-400 items-center md:mt-0 mt-4">
              <div className="bg-gray-400 p-1">
                <MdAlternateEmail className='text-2xl' />
              </div>
              <input type="text" className='w-full p-1 focus:outline-none border-none bg-transparent' placeholder='Email' />
            </div>
          </div>
          <div className="w-full mt-4">
            <textarea name="" placeholder='Message' id="" className='w-full h-32 p-1 focus:outline-none  bg-transparent border-b shadow border-gray-400' cols="30" rows="10"></textarea>
          </div>
          <button className="px-2 py-1 rounded bg-[#73F8AB] mt-4">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection