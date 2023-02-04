import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { VscDebugBreakpointFunction } from 'react-icons/vsc'
import Skill from './Skill'
// 73F8AB
const Social = ({name}) => {
  return (
    <div className="container md:px-12 px-2 m-auto  flex flex-col">{name}
      <div className="w-full flex gap-4 flex-wrap justify-between px-8 pb-8 mb-4">
        <div className="flex items-center"><BsFacebook className='text-xl text-[#73F8AB]' /><a target="_blank" href='https://facebook.com/yem.usman' className="ml-1 underline text-gray-300 hover:text-[#73F8AB]">@yem.usman</a></div>
        <div className="flex items-center"><AiFillInstagram className='text-xl text-[#73F8AB]' /><a target="_blank" href='https://instagram.com/yem.usman' className="ml-1 underline text-gray-300 hover:text-[#73F8AB]">@yem.usman</a></div>
      </div>
    </div>
  )
}

export default Social