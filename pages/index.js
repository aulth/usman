import Head from 'next/head'
import { useEffect, useState } from 'react'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Link from 'next/link'
import Crousel from '../components/Crousel'
import Image from 'next/image'
import ReactTyped from 'react-typed';
import Contact from '../components/Contact'
import Social from '../components/Social'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohd Usman : Portfolio</title>
        <meta name="description" content="Full Stack Web Devloper with skills of ReacJs, NodeJs, MongoDb, Nextjs, HTML, CSS, Javascript SQL, etc." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FDEFDA" />
        <meta name="author" content="Mohd Usman" />
        <meta property="og:title" content="Mohd Usman : Portfolio" />
        <meta property="og:description" content="Full Stack Web Devloper with skills of NextJs, ReactJs, Nodejs, Mongodb,SQL etc." />
        <meta property="og:url" content="http://aulth.github.io/usman" />
        <meta property="og:image" content="https://i.ibb.co/3NN64R4/usman.jpg" />
        <meta name="google-site-verification" content="2Ii8X_9GYq3lZtKo33o6boJYW9GMfW3hWW1IhUKLKHE" />
      </Head>
      <main>
        <div className='glass rounded-[18px] screen-full mb-[15px]' >
          <nav>
            <ul className='flex justify-end box-border p-3 items-center rounded-tl-[10px] rounded-tr-[10px] '>
              <li className='absolute left-3 font-bold text-lg'>Portfolio</li>
              <Link href={'/'} ><li className='ml-2 cursor-pointer hover:font-semibold'>Home</li></Link>
              <Link href={'/about'} ><li className='ml-2 cursor-pointer hover:font-semibold'>About</li></Link>
              <a href="#contact"><li className='ml-2  hover:font-semibold'>Contact</li></a>
            </ul>
          </nav>
          <div className="flex flex-col items-center md:flex-row md:justify-around box-border">
            <div style={{ minHeight: 'calc(100vh - 78px)' }} className="w-full flex flex-col justify-center items-center md:justify-around rounded-bl-[10px]">
              <div className='text-center md:text-left md:p-0 px-5'>
                <h2 className="md:text-[4rem] text-[3rem] name-title" id='greet'>Hy! I Am</h2>
                <h2 className="md:text-[4rem] text-[3rem] name-title text-[#FB8574]">
                  Mohd Usman
                </h2>
                <h2 className="text-xl font-semibold"><ReactTyped strings={['Front-End Web Developer', 'Back-End Web Developer', 'Full Stack Web Developer']} typeSpeed={100} backSpeed={50} loop smartBackspace /></h2>
                <a href="/cv_mohd_usman.pdf" download={true}><button className="p-2 rounded-lg mt-5 glass font-semibold text-sm hover:text-[#F7FBFF] hover:bg-[#FB8574]">Download CV</button></a>
                <a href="#contact"><button className="p-2 rounded-lg mt-5 ml-2 glass hover:bg-[#171E2B] font-semibold text-sm hover:text-[#F7FBFF]">Contact</button></a>
              </div>
            </div>
            <Crousel />
          </div>
        </div>
        <div className="glass rounded-[18px] screen-full flex flex-col items-center mb-[15px]">
          <h2 className='text-2xl font-semibold mt-1'>My Awesome Projects</h2>
          <div className="projects w-full flex flex-wrap justify-center box-border mt-2 ">
            <Projects />
          </div>
        </div>
        <div className="glass rounded-[18px] screen-full flex flex-col items-center relative mb-[15px]">
          <h2 className='text-2xl font-semibold absolute left-0 rounded-tl-[18px] p-2 top-0 bg-[#171E2B] cursor-default hover:bg-[#FB8574] text-[#F7FBFF] '>Skills</h2>
          <Skills />
        </div>
        <div id='contact' className="glass screen-full rounded-[18px] flex flex-col  items-center px-2">
          <h2 className="text-3xl font-bold mt-2">Contact</h2>
          <div className="container my-2">
          <Social/>
          </div>
          <Contact/>
        </div>
      </main>
    </div>
  )
}
