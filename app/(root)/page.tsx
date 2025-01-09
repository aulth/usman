import AboutMe from '@/components/Portfolio/AboutMe'
import Experiences from '@/components/Portfolio/Experiences/Experiences'
import Projects from '@/components/Portfolio/Projects/Projects'
import Hero from '@/components/Portfolio/Hero'
import Navbar from '@/components/Portfolio/Navbar/Navbar'
import React from 'react'
import { projects } from '@/data/projects'
import MySkills from '@/components/Portfolio/Skills/MySkills'
import GetInTouch from '@/components/Portfolio/Contact/GetInTouch'
export default function page() {
  return (
    <div className='relative mx-auto w-full max-w-5xl md:p-0 p-4 py-2'>
      <div className="rounded-full !-z-10 aspect-square md:w-[400px] w-[350px] max-w-xl bg-[#0051C9] opacity-60 fixed md:-top-[250px] md:-left-[0px] -top-[180px] -left-[40px] blur-[200px]"></div>
      <div className="rounded-full !-z-10 aspect-square md:w-[400px] w-[350px] max-w-xl bg-[#D046BB] opacity-60 fixed md:top-[300px] md:-right-[250px] md:opacity-40 md:blur-[250px] top-[280px] -right-[180px] blur-[280px]"></div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experiences />
      <Projects projects={projects} />
      <MySkills />
      <GetInTouch />
    </div>
  )
}
