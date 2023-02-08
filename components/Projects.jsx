import React, {useContext} from 'react'
import AppContext from 'AppContext'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiFillGithub, AiFillLock } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { VscDebugBreakpointFunction } from 'react-icons/vsc'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import Skill from './Skill'
import AllProjects from './AllProjects'
// 73F8AB
const Projects = () => {
  const {openDrawer} = useContext(AppContext)
  return (
    <>
      <div id='works' className="container m-auto md:px-12 px-2  flex flex-col scroll-m-16">
        <h2 className="font-semibold text-center text-2xl text-[#73F8AB] md:mb-4 my-4 ">Projects</h2>
        <div className="w-full flex gap-5 flex-wrap justify-between p-4 mb-4">
          <div className="md:w-[23%] w-[47%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center relative">
            <div className="w-28 flex items-center justify-center h-5 bg-[#f06529] absolute -top-2 -left-2 text-white">
              <span className='text-sm'>Personal Project</span>
              <div className="absolute w-2 border-l-8 border-l-transparent border-t- border-t-8 border-t-[#c15020]  left-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/add2cart.webp" className='w-1/2' alt="" />
            <a href='https://add2cart.vercel.app/' target="_blank" className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
              Online E-commerce Platform
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/add2cart" target="_blank"><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /></a>
            </div>
          </div>
          <div className="md:w-[23%] w-[47%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center relative">
            <div className="w-[4.3rem] flex items-center justify-center h-5 bg-[#f0db4f] absolute -top-2 md:-left-2 -right-2 text-gray-800">
              <span className='text-sm'>Internship</span>
              <div className="absolute w-2 md:border-l-8  md:border-l-transparent md:border-r-0 border-r-8 border-r-transparent border-t- border-t-8 border-t-[#b6a53b] md:left-0 right-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/ibank.png" className='w-1/3' alt="" />
            <a href='http://ibank.vercel.app/' target="_blank" className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
              Banking System
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/ibank" target="_blank"><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /></a>
            </div>
          </div>
          <div className="md:w-[23%] w-[47%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center relative">
            <div className="w-[4.3rem] flex items-center justify-center h-5 bg-[#36B7F0] text-white absolute -top-2 -left-2">
              <span className='text-sm'>Freelance</span>
              <div className="absolute w-2 border-l-8 border-l-transparent border-t- border-t-8 border-t-[#278ab4] left-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/kakafeeds.webp" className='w-1/3' alt="" />
            <a href='http://kaka.vercel.app/' target="_blank" className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
              Single Product Website
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/kaka" target="_blank" className='relative'><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /><AiFillLock className='absolute -bottom-1 -right-1 text-sm bg-gray-300 rounded-full p-[0.1rem] border border-[#73F8AB] hover:bg-[#73F8AB]' /></a>
            </div>
          </div>
          <div className="md:w-[23%] w-[47%] h-40  shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center relative">
            <div className="w-28 flex items-center justify-center h-5 bg-[#FF69B4] text-white absolute -top-2 md:-left-2 -right-2">
              <span className='text-sm'>Personal Project</span>
              <div className="absolute w-2  md:border-l-8  md:border-l-transparent  md:border-r-0 border-r-8 border-r-transparent border-t- border-t-8 border-t-[#bd4d85] md:left-0 right-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/myspace.webp" className='w-1/2' alt="" />
            <a href='https://myspacebook.vercel.app/' target="_blank" className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
              Flat Finder
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/myspace" target="_blank"><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /></a>
            </div>
          </div>
          <div className="md:w-[23%] w-[47%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center relative">
            <div className="w-[4.3rem] flex items-center justify-center h-5 bg-[#7E57C2] text-white absolute -top-2 -left-2">
              <span className='text-sm'>Internship</span>
              <div className="absolute w-2 border-l-8 border-l-transparent border-t- border-t-8 border-t-[#6948a1] left-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/dobby.webp" className='w-1/3' alt="" />
            <a href="http://mohd-usman-dobby.vercel.app/" target="_blank" className="text-gray-300 mt-2 hover:text-[#73F8AB] hover:underline px-2 text-center">
              Online Personal Storage
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/mohd-usman-dobby" target="_blank"><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /></a>
            </div>
          </div>
          <div className="md:w-[23%] w-[47%] h-40  shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center relative">
            <div className="w-28 flex items-center justify-center h-5 bg-[#5D4037] text-white absolute -top-2 md:-left-2 -right-2">
              <span className='text-sm'>Personal Project</span>
              <div className="absolute w-2  md:border-l-8  md:border-l-transparent md:border-r-0 border-r-8 border-r-transparent border-t- border-t-8 border-t-[#442f28] md:left-0 right-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/econ.webp" className='w-1/3' alt="" />
            <a href='http://e-con.vercel.app/' target="_blank" className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
              Email Concealer
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/econ" target="_blank"><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /></a>
            </div>
          </div>
          <div className="md:w-[23%] w-[47%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center relative">
            <div className="w-28 flex items-center justify-center h-5 bg-[#3949AB] text-white absolute -top-2 -left-2">
              <span className='text-sm'>Personal Project</span>
              <div className="absolute w-2 border-l-8 border-l-transparent border-t- border-t-8 border-t-[#2f3987] left-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/textmonkey.webp" className='w-1/3' alt="" />
            <a href='https://aulth.github.io/textmonkey/' target="_blank" className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
              Text Monkey
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/textmonkey" target="_blank"><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /></a>
            </div>
          </div>
          <div className="md:w-[23%] w-[47%] h-40  shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center relative">
            <div className="w-[4.3rem] flex items-center justify-center h-5 bg-[#3D9970] text-white absolute -top-2 md:-left-2 -right-2">
              <span className='text-sm'>Freelance</span>
              <div className="absolute w-2  md:border-l-8  md:border-l-transparent md:border-r-0 border-r-8 border-r-transparent border-t- border-t-8 border-t-[#2c7152] md:left-0 right-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/alatwal.png" className='w-1/3' alt="" />
            <a href='https://www.alatwal.com/' target="_blank" className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
              Alatwal - Tourism
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/tourism" target="_blank" className='relative'><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /><AiFillLock className='absolute -bottom-1 -right-1 text-sm bg-gray-300 rounded-full p-[0.1rem] border border-[#73F8AB] hover:bg-[#73F8AB]' /></a>
            </div>
          </div>
          <div className="md:w-[23%] w-[47%] h-40 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  flex flex-col justify-center items-center relative">
            <div className="w-[5.7rem] flex items-center justify-center h-5 bg-[#8F00FF] text-white absolute -top-2 -left-2">
              <span className='text-sm'>College Event</span>
              <div className="absolute w-2 border-l-8 border-l-transparent border-t- border-t-8 border-t-[rgb(141,16,236)] left-0 -bottom-2">
              </div>
            </div>
            <img src="/images/projects/jmimun.png" className='w-1/3' alt="" />
            <a href='https://jmimun.org' target="_blank" className="text-gray-300 hover:text-[#73F8AB] hover:underline mt-2 px-2 text-center">
              JMI - MUN
            </a>
            <div className="px-4 flex justify-end items-center absolute bottom-4 right-0">
              <a href="https://github.com/aulth/mun" target="_blank"><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /></a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end px-8">
          <button onClick={openDrawer} className="text-right w-20 text-[#73F8AB] hover:underline">Show All..</button>
        </div>
      </div>
      <AllProjects />
    </>
  )
}

export default Projects