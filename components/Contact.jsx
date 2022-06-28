import React from 'react'
import Image from 'next/image'
import {FiTwitter} from 'react-icons/fi'
const Contact = () => {
  return (
    <>
    <div className="w-full">

      <div className="w-full flex border border-gray-400 rounded">
        <div className="md:flex hidden justify-center items-center bg-gray-700 box-border p-8 w-[40%]">
          <Image src="/images/contact.svg" height={300} width={300} className='w-full rounded ' alt="contact" />
        </div>
        <div className="md:w-[60%] w-full">
          <form className="w-full box-border p-4">
            <label htmlFor="name" className='text-[13px]'>Name</label>
            <input type="text" name='name' placeholder='Enter your name...' className="w-full p-1 rounded bg-transparent focus:outline-none border-b border-gray-400 mb-4" />
            <label htmlFor="email" className='text-[13px]'>Email</label>
            <input type="email" name='email' placeholder='Email address' className="w-full p-1 rounded bg-transparent focus:outline-none border-b border-gray-400 mb-4" />
            <label htmlFor="email" className='text-[13px]'>Whatsapp</label>
            <input type="email" name='email' placeholder='Whatsapp Number' className="w-full p-1 rounded bg-transparent focus:outline-none border-b border-gray-400 mb-4" />
            <label htmlFor="name" className='text-[13px] '>Message</label>
            <label htmlFor="name" className='text-[13px] '>Message</label>
            <textarea type="text" name='name' placeholder='Type your message...' className="w-full p-1 rounded bg-transparent focus:outline-none border-b border-gray-400 mb-4" />
            <button className='bg-[#Fb8574] px-2 py-1 hover:text-[#F7FbFF] rounded'>Send Query</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact