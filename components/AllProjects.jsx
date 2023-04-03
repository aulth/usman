import React, { useState, useContext } from 'react'
import AppContext from 'AppContext'
import { AiFillGithub, AiFillLock } from 'react-icons/ai'
import { MdOutlineClose } from 'react-icons/md'
const AllProjects = () => {
    const { projectsTitle, closeDrawer } = useContext(AppContext)
    return (
        <div onMouseLeave={closeDrawer} id='all-projects' className="fixed top-[60px] -left-full duration-100 ease-in-out h-[calc(100vh-60px)] box-border bg-[#2D2F33] text-gray-300 shadow-2xl md:w-[24rem] w-full z-10 ">
            <div className="w-full flex justify-between items-center bg-[#2D2F33] z-50 px-4 py-2">
                <h2 className="font-semibold">
                    {projectsTitle}
                </h2>
                <button onClick={closeDrawer} className='text-green-400 hover:text-gray-300'>
                    <MdOutlineClose />
                </button>
            </div>
            <div className="w-full all-projects border-[#73F8AB] h-[calc(100vh-60px)] box-border py-2 px-4  overflow-y-auto">
                <div className="w-full border border-gray-300 rounded h-20 my-4 mt-2 flex items-start relative project FullStack Backend ">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#f06529] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#c15020] right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/add2cart.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 relative">
                        <a href='https://add2cart.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Add2Cart</a>
                        <p>Online ecommerce </p>
                        <p>platform</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/add2cart" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-[4.3rem] flex items-center justify-center h-5 bg-[#f0db4f] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm text-gray-800'>Freelance</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#b6a53b]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/alatwal.jpg" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 relative">
                        <a href='https://www.alatwal.com/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">AlAtwal</a>
                        <p>Visa and Tour Ticket Booking</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-1 right-0">
                            <a href="https://github.com/aulth/tourism" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /><AiFillLock className='absolute -bottom-1 -right-1 text-sm bg-gray-300 text-[#2D2F33] rounded-full p-[0.1rem] border border-[#73F8AB] hover:bg-[#73F8AB]' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#36B7F0] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#278ab4]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/atm.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://aulth.github.io/atm/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">ATM Simulator</a>
                        <p>Online ATM </p>
                        <p>game</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/atm" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#FF69B4] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#bd4d85]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/aulthlink.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://aulthlink.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Aulthlink</a>
                        <p>Simplify your lengthy</p>
                        <p>links.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/link-shortner" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#7E57C2] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#6948a1]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/bijlivibhag.jpg" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://aulth.github.io/bijlivibhag/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Bijli Vibhag</a>
                        <p>JMI EE 3rd Sem </p>
                        <p>student material</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/bijlivibhag" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#5D4037] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#442f28]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/cloudnote.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://cloudnote.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Cloud Note</a>
                        <p>Online note writing platform</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/cloud-note" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-[6.5rem] flex items-center justify-center h-5 bg-[#3949AB] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>College Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#2f3987]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/collegequora.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://collegequora.herokuapp.com/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">College Quora</a>
                        <p>Online student forum </p>
                        <p>for JMI students</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/quora-for-college" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#3D9970] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#2c7152]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/digital-clock.jpg" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://aulth.github.io/digital-clock/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Digital Clock</a>
                        <p>Simple digital </p>
                        <p>clock.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/digital-clock" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-[4.3rem] flex items-center justify-center h-5 bg-[#F1C40F] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm text-gray-800'>Internship</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#cba50d]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/dobby.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://mohd-usman-dobby.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Dobby</a>
                        <p>Host our images  </p>
                        <p>online free.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/mohd-usman-dobby" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#E67E22] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#cc6f1e]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/econ.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://e-con.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">ECon</a>
                        <p>Send anonymous </p>
                        <p>email.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/econ" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-[4.3rem] flex items-center justify-center h-5 bg-[#2980B9] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Internship</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#216999]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/ibank.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://ibank.vercel.app' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">iBank</a>
                        <p>Modern Banking</p>
                        <p>system.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/ibank" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300 hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend  ">
                    <div className="w-[5.6rem] flex items-center justify-center h-5 bg-[#8F00FF] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>College Event</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[rgb(141,16,236)] right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/jmimun.png" className='h-[calc(5rem-2px)] rounded-l' alt="JMI-MUN" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://jmimun.org' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">JMI - MUN</a>
                        <p>Model United</p>
                        <p>Nations.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/mun" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300 hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-[4.3rem] flex items-center justify-center h-5 bg-[#2ECC71] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Freelance</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#27b261]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/kakafeeds.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://www.kakafeeds.com/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">KakaFeeds</a>
                        <p>Single product</p>
                        <p>website</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-1 right-0">
                            <a href="https://github.com/aulth/kaka" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  hover:text-[#73F8AB] text-gray-300 text-xl' /><AiFillLock className='absolute -bottom-1 -right-1 text-sm bg-gray-300 text-[#2D2F33] rounded-full p-[0.1rem] border border-[#73F8AB] hover:bg-[#73F8AB]' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#9B59B6] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#844c9b]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/myspace.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://myspacebook.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">mySpace</a>
                        <p>Find the perfect</p>
                        <p>space.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/myspace" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#27AE60] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#208f4e]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/newsshort.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://newsshort.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Newsshort</a>
                        <p>Summrized news</p>
                        <p> from Inshort.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/news-short" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project FullStack Backend ">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#E74C3C] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#cd4434]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/panda.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://mypanda.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Panda</a>
                        <p>Simple blog</p>
                        <p> website.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/panda" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend ">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#f0db4f] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm text-gray-800'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#b6a53b]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/portfolio.jpg" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://mohd-usman.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Portfolio</a>
                        <p>My online </p>
                        <p> portfolio.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/usman" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#1E8449] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#1E8449]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/quran.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://full-quran.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Quran</a>
                        <p>Zuz wise complete quran.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/quran" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#2E86C1] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#2E86C1]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/saibuzurg.jpg" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://saibuzurg.w3spaces.com' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Sai Buzurg</a>
                        <p>My village </p>
                        <p>website.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/sai-buzurg" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#E74C3C] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#d14535]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/textmonkey.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://aulth.github.io/textmonkey/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Text Monkey</a>
                        <p>Simple text </p>
                        <p>utilizer.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/textmonkey" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full relative border border-gray-300 rounded h-20 my-4  flex items-start  project Frontend">
                    <div className="w-28 flex items-center justify-center h-5 bg-[#F5B041] text-white absolute -top-3 -right-[calc(0.5rem+0.5px)]">
                        <span className='text-sm'>Personal Project</span>
                        <div className="absolute w-2 border-r-transparent border-b-transparent border-r-8 border-t-8  border-t-[#dd9f3b]  right-0 -bottom-2">
                        </div>
                    </div>
                    <img src="/images/projects/screenshot/weather-monkey.png" className='h-[calc(5rem-2px)] rounded-l' alt="Add2cart" />
                    <div className="w-full flex flex-col items-start justify-start p-1 px-2 h-[calc(5rem-2px)] relative">
                        <a href='https://weather-monkey.vercel.app/' target="_blank" rel="nofollow" className="font-semibold text-[#73F8AB] hover:underline ">Weather Monkey</a>
                        <p>Weather with</p>
                        <p> map.</p>
                        <div className="p-2 flex justify-end items-center absolute bottom-0 right-0">
                            <a href="https://github.com/aulth/weather-monkey" target="_blank" rel="nofollow" className='relative'><AiFillGithub className='md:text-2xl z-10  text-gray-300  hover:text-[#73F8AB] text-xl' /></a>
                        </div>
                    </div>
                </div>
                <div className="h-8"></div>
            </div>
        </div>
    )
}

export default AllProjects