import React, {useContext} from 'react'
import AppContext from 'AppContext'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
const AboutSection = () => {
  const {filterProjects} = useContext(AppContext);
  return (
    <div className="container md:p-12 md:pb-0 px-2 m-auto  flex flex-col-reverse md:flex-row justify-center">
      <div className="w-full md:w-1/2 md:mt-0 mt-16 flex flex-col gap-4 items-start justify-start p-4 relative ">
        <div className="w-full rounded shadow-2xl px-4 py-2">
          <div className="w-full flex justify-between items-center text-[#73F8AB]">
            <h2 className="text-2xl font-mono ">
              Front End Developer
            </h2>
            <AiOutlineEye className='text-xl' />
          </div>
          <p className='text-gray-300'>I am a front-end web developer proficient in creating dynamic, responsive websites and web applications with HTML, CSS, and JavaScript.</p>
          <button onClick={()=>{filterProjects('Frontend')}} className='uppercase mt-3 underline text-white hover:text-[#73F8AB] cursor-pointer'>10 Projects</button>
        </div>
        <div className="w-full rounded shadow-2xl px-4 py-2">
          <div className="w-full flex justify-between items-center text-[#73F8AB]">
            <h2 className="text-2xl font-mono ">
              Back End Developer
            </h2>
            <BsCodeSlash className='text-xl' />
          </div>
          <p className='text-gray-300'>Experienced in server-side programming and databases, I aim to develop efficient and scalable backend solutions.</p>
          <button  onClick={()=>{filterProjects('Backend')}}  className='uppercase mt-3 underline text-white hover:text-[#73F8AB] cursor-pointer'>10 Projects</button>
        </div>
        <div className="w-full rounded  shadow-2xl px-4 py-2">
          <div className="w-full flex justify-between items-center text-[#73F8AB]">
            <h2 className="text-2xl font-mono ">
              Full Stack Developer
            </h2>
            <BsCodeSlash className='text-xl' />
          </div>
          <p className='text-gray-300'>As a full-stack web developer, I design and build dynamic websites and web applications from front-end to back-end</p>
          <button  onClick={()=>{filterProjects('FullStack')}}  className='uppercase mt-3 underline text-white hover:text-[#73F8AB] cursor-pointer'>10 Projects</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:minh-[calc(100vh-60px)] p-4 flex flex-col justify-start">
        <p className="text-gray-300 font-semibold">Introduce</p>
        <h2 className='md:text-4xl text-3xl font-mono leading-loose text-white mt-6'>Hello! I am Mohd Usman</h2>
        <p className=" font-sans italic mt-4 text-white">
          Web development has the power to turn ideas into impactful realities, connecting us in ways never before possible.
        </p>
        <p className="text-gray-300 mt-4">
          From class 9th, I embarked on a journey to contribute to the internet. I honed my skills in web development, constantly learning and growing in both front-end and back-end technologies. This passion eventually led me to become a full-stack developer, delivering dynamic websites and web applications that solve real-world problems.
        </p>
      </div>
    </div>
  )
}

export default AboutSection