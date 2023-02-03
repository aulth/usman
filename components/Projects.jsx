import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { VscDebugBreakpointFunction } from 'react-icons/vsc'
import Skill from './Skill'
// 73F8AB
const Projects = () => {
  return (
    <div className="container md:px-12 px-2  flex flex-col">
      <h2 className="font-semibold text-center text-2xl text-[#73F8AB] md:mb-4 my-4 ">Projects</h2>
      <div className="w-full flex gap-4 flex-wrap justify-between p-4 mb-4">
        <div className="md:w-[23%] w-[48%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center">
          <img src="/images/projects/add2cart.webp" className='w-1/2' alt="" />
          <a href='#' className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
            Online E-commerce Platform
          </a>
        </div>
        <div className="md:w-[23%] w-[48%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center">
          <img src="/images/projects/ibank.png" className='w-1/3' alt="" />
          <a href='#' className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
            Banking System
          </a>
        </div>
        <div className="md:w-[23%] w-[48%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center">
          <img src="/images/projects/kakafeeds.webp" className='w-1/3' alt="" />
          <a href='#' className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
            Single Product Website
          </a>
        </div>
        <div className="md:w-[23%] w-[48%] h-40  shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center">
          <img src="/images/projects/myspace.webp" className='w-1/2' alt="" />
          <a href='#' className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
            Flat Finder
          </a>
        </div>
        <div className="md:w-[23%] w-[48%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center">
          <img src="/images/projects/dobby.webp" className='w-1/3' alt="" />
          <h2 className="text-gray-300 mt-2 hover:text-[#73F8AB] hover:underline px-2 text-center">
            Online Personal Storage
          </h2>
        </div>
        <div className="md:w-[23%] w-[48%] h-40  shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center">
          <img src="/images/projects/econ.webp" className='w-1/3' alt="" />
          <a href='#' className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
            Email Concealer
          </a>
        </div>
        <div className="md:w-[23%] w-[48%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center">
          <img src="/images/projects/textmonkey.webp" className='w-1/3' alt="" />
          <a href='#' className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
            Text Monkey
          </a>
        </div>
        <div className="md:w-[23%] w-[48%] h-40  shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center">
          <img src="/images/projects/alatwal.png" className='w-1/3' alt="" />
          <a href='#' className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
            Alatwal - Tourism
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects