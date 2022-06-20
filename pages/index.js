import Head from 'next/head'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Link from 'next/link'
import Crousel from '../components/Crousel'
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
              <a href="#contact"><li className='ml-2'>Contact</li></a>
            </ul>
          </nav>
          <div className="flex flex-col items-center md:flex-row md:justify-around box-border">
            <div style={{ minHeight: 'calc(100vh - 78px)' }} className="w-full flex flex-col justify-center items-center md:justify-around rounded-bl-[10px]">
              <div className='text-center md:text-left'>
                <h2 className="text-[4rem] name-title">Hy! I Am</h2>
                <h2 className="text-[4rem] name-title text-orange-400">
                  Mohd Usman
                </h2>
                <h2 className='text-xl'>Full Stack Web Developer</h2>
                <a href="/cv_mohd_usman.pdf" download={true}><button className="p-2 rounded-lg mt-5 glass hover:bg-orange-200">Download CV</button></a>
                <a href="#contact"><button className="p-2 rounded-lg mt-5 ml-2 glass hover:bg-green-200">Contact</button></a>
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
          <h2 className='text-2xl font-semibold absolute left-0 rounded-tl-[18px] p-2 top-0 bg-green-200 '>Skills</h2>
          <p className='absolute right-[8px] top-[4px]'>The ability to do something well; expertise</p>
          <Skills />
        </div>
        <div id='contact' className="glass screen-full rounded-[18px] flex flex-col items-center px-2">
          <h2 className='text-2xl font-semibold mt-1'>Contact</h2>
          <div className="glass rounded-xl md:w-1/2 w-full mt-2">
            <div className="social-media w-full flex justify-center mt-2">
              <img src="/social/facebook.svg" className='social-icon m-1' alt="facebook" />
              <img src="/social/github.svg" className='social-icon m-1' alt="github" />
              <img src="/social/instagram.svg" className='social-icon m-1' alt="instagram" />
              <img src="/social/linkedin.svg" className='social-icon m-1' alt="linkedin" />
              <img src="/social/telegram.svg" className='social-icon m-1' alt="telegram" />
              <img src="/social/twitter.svg" className='social-icon m-1' alt="twitter" />
              <img src="/social/youtube.svg" className='social-icon m-1' alt="youtube" />
            </div>
            <form className='w-full box-border p-2'>
              <div className="w-full flex items-center glass rounded border my-1 p-1">
                <img src="https://img.icons8.com/color/48/undefined/name--v1.png" className='w-[25px]' alt="" />
                <input type="text" name='name' className='w-full bg-transparent focus:outline-none pl-1' placeholder='Enter your name' />
              </div>
              <div className="w-full flex items-center glass rounded border my-1 p-1">
                <img src="https://img.icons8.com/fluency/48/undefined/email-open.png" className='w-[25px]' alt="" />
                <input type="email" name='email' className='w-full bg-transparent focus:outline-none pl-1' placeholder='Enter your email' />
              </div>
              <div className="w-full flex items-center glass rounded border my-1 p-1">
                <img src="/social/whatsapp.svg" className='w-[25px]' alt="" />
                <input type="tel" name='whatsapp' className='w-full bg-transparent focus:outline-none pl-1' placeholder='Enter your whatsapp number' />
              </div>
              <div className="w-full flex items-center glass rounded border my-1 p-1 pt-0">
                <img src="https://img.icons8.com/fluency/48/undefined/topic.png" className='w-[25px] absolute top-0' alt="" />
                <textarea name='whatsapp' className='w-full bg-transparent focus:outline-none pl-[31px] ' rows={3} placeholder='Type your message...' />
              </div>
              <button className='flex items-center p-1 rounded glass border border-orange-300 font-semibold'>Send <img className='w-[20px] ml-2' src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/undefined/external-send-contact-flatart-icons-flat-flatarticons.png" alt="" /></button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
