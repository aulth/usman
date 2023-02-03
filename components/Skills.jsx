import React from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { VscDebugBreakpointFunction } from 'react-icons/vsc'
import Skill from './Skill'
// 73F8AB
const Skills = () => {
  return (
    <div className="container md:px-12 px-2  flex flex-col">
      <h2 className="font-semibold text-center text-2xl text-[#73F8AB] md:mb-4 my-4 ">Skills</h2>
      <div className="w-full flex gap-2 flex-wrap justify-between p-4 mb-4">
        <Skill title={"HTML"} percent={80} color={'#f06529'}/>
        <Skill title={"CSS"} percent={70} color={'#264de4'}/>
        <Skill title={"Javascript"} percent={60} color={'#f0db4f'}/>
        <Skill title={"NodeJs"} percent={55} color={'#68a063'}/>
        <Skill title={"ReactJs"} percent={80} color={'#61dbfb'}/>
        <Skill title={"TailwindCSS"} percent={60} color={'#36B7F0'}/>
        <Skill title={"C++"} percent={45} color={'#044F88'}/>
        <Skill title={"Github"} percent={55} color={'#8F00FF'}/>
        <Skill title={"NextJs"} percent={55} color={'#FF69B4'}/>
        <Skill title={"Blogger"} percent={55} color={'#FC4F08'}/>
      </div>
    </div>
  )
}

export default Skills