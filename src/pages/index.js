import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar'
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { IoMdArrowDropup } from 'react-icons/io'
import LandingPage from 'components/LandingPage'
import AboutSection from 'components/AboutSection'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactSection from 'components/ContactSection'
import Social from 'components/Social'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ name }) {
  return (
    <>
      <Head>
        <title>Mohd Usman | Full Stack Web Developer | Personal & Online Projects</title>
        <meta name="description" content="As a Full Stack Web Developer, I specialize in creating responsive and user-friendly designs for personal, online, and freelance projects. Seeking internship opportunities. Check out my portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2D2F33" ></meta>
        <link rel="canonical" href="https://mohd-usman.vercel.app/" />
        <link rel="alternate" href="https://mohd-usman.vercel.app/" hreflang="en-in" />
        {/* facebook open graph  */}
        <meta property="og:title" content="Mohd Usman - full stack web developer" />
        <meta property="og:site_name" content="Mohd Usman" />
        <meta property="og:url" content="https://mohd-usman.vercel.app" />
        <meta property="og:description" content="As a Full Stack Web Developer, I have worked on personal, online, and freelance projects. Check out my portfolio to see what I can do for you. Currently seeking internship opportunities." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://mohd-usman.vercel.app/images/usman.png" />
    
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohd Usman",
            "url": "https://mohd-usman.vercel.app",
            "sameAs": [
              "https://www.linkedin.com/in/yemusman",
              "https://github.com/aulth",
              "https://twitter.com/yem_usman"
            ],
            "jobTitle": "Full Stack Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "The Fuel Media"
            },
            "image": "https://mohd-usman.vercel.app/images/usman.png",
            "description": "I am a Full Stack Web Developer with experience in various programming languages and web development frameworks.",
            "memberOf": {
              "@type": "Organization",
              "name": "IEEE",
              "url": "https://ieee.org"
            }
          }
        ` }} />


      </Head>
      <Navbar />
      <LandingPage />
      <AboutSection />
      <Skills />
      <Projects />
      <ContactSection />
      <Social />
      <a href="#" className="w-6 h-6 bg-[#73F8AB] rounded-full border hover:border-[#73F8AB] hover:text-[#73F8AB] fixed bottom-3 right-3 flex justify-center items-center hover:bg-transparent cursor-pointer"><MdKeyboardArrowUp className='text-3xl' /></a>
    </>
  )
}
