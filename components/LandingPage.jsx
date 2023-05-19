import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
const LandingPage = () => {
  return (
    <div className="container md:px-12 px-2  m-auto flex flex-col-reverse md:flex-row justify-center md:h-[calc(100vh-60px)]">
        <div className="w-full md:w-1/2 md:mt-0 mt-16 md:h-[calc(100vh-60px)] flex flex-col items-start justify-center p-4 relative ">
          <div className="flex gap-2 items-center">
          <div className="px-2 py-1 rounded hover:bg-[#73F8AB] text-[#73F8AB] hover:text-[#2D2F33] bg-transparent border border-[#73F8AB] duration-75 cursor-default z-10">Full Stack Web Developer</div>
          </div>
          <div className="w-full my-4">
            <h2 className='md:text-4xl text-3xl font-mono leading-loose text-white'>Building the web</h2>
            <h2 className='md:text-3xl text-2xl font-mono leading-loose text-white'>Turning ideas into innovative solutions</h2>
          </div>
          <div className="w-full md:mb-24">
            <p className='font-sans  text-gray-300 leading-loose'>Delivering beautiful, professional websites that exceed expectations.</p>
            <a href="https://wa.me/919839872992" target='_blank' rel='nofollow' className='uppercase text-[#73F8AB] underline'>Let's chat</a>
          </div>
          <div className="w-full flex justify-start md:absolute bottom-0">
            <div className="py-1 flex items-center">
              <div className='text-[3.125rem] text-white'>2</div>
              <div className="flex flex-col items-start justify-center mt-1 ml-1 text-gray-300">
                <p className=''>Years</p>
                <p className=''>Experience</p>
              </div>
            </div>
            <div className="py-1 ml-8 flex items-center">
              <div className='text-[3.125rem] text-white'>23</div>
              <div className="flex flex-col items-start justify-center mt-1 ml-1 text-gray-300">
                <p className=''>Projects</p>
                <p className=''>Completed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:h-[calc(100vh-60px)] p-4 flex items-center">
          <div className="w-3/4 m-auto  rounded-full bg-[#29282D] aspect-square relative">
            <div className="w-full absolute top-0">
              <img src="/images/usman.png" className='object-cover rounded-full aspect-square w-full  overflow-hidden' alt="Mohd Usman" />
            </div>
            <div className="md:w-16 w-12 md:h-16 h-12 flex justify-center items-center rounded-full bg-[#29282D] absolute top-3/4 drop-shadow-lg">
              <GrReactjs className='md:text-4xl text-3xl text-[#61dbfb]' />
            </div>
            <div className="md:w-16 w-12 md:h-16 h-12 flex justify-center items-center rounded-full bg-[#29282D] absolute top-[90%] left-1/2 drop-shadow-lg">
              <img src="/images/cpp.svg" className='w-[2.225rem] md:w-[3rem]' alt="C++" />
            </div>
            <div className="md:w-20 w-14 md:h-20 h-14 flex justify-center items-center rounded-full bg-[#29282D] absolute top-3/4 left-3/4 drop-shadow-lg">
              <FaNodeJs className='md:text-5xl text-4xl text-[#73F8AB]' />
            </div>
            <div className="md:w-16 w-12 md:h-16 h-12 flex justify-center items-center rounded-full bg-[#29282D] absolute top-1/2 left-[90%] drop-shadow-lg">
              <SiJavascript className='md:text-3xl text-2xl text-[#f0db4f]' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default LandingPage