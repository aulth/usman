import React, { useState, useEffect } from 'react'
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
import { MdOutlineMenuOpen, MdOutlineClose, MdOutlineSpeakerNotes, MdFileDownload } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMessageSquare } from 'react-icons/fi'
import Link from 'next/link'
import { TbDownload } from 'react-icons/tb'
const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(null);
    const toggleMobileMenu = () => {
        if (typeof window !== 'undefined') {
            let mobileMenu = document.querySelector('#mobile-menu');
            if (mobileMenu.classList.contains('-right-full')) {
                mobileMenu.classList.remove('-right-full');
                mobileMenu.classList.add('right-0');
            } else {
                mobileMenu.classList.remove('right-0');
                mobileMenu.classList.add('-right-full');
            }
        }
    }
    useEffect(() => {
        document.querySelectorAll('.menu-item').forEach((item) => item.classList.remove('text-[#73F8AB]'))
        if (menuClicked !== null) {
            document.querySelector(`#${menuClicked}`).classList.add('text-[#73F8AB]')
        }
        document.body.style.backgroundColor = "#2D2F33"
    }, [menuClicked])

    return (
        <div className='w-screen md:px-4 sticky top-0 bg-[#2D2F33] z-20'>
            <div className="container m-auto flex justify-between items-center md:px-12 p-4 text-white text-sm">
                <h1 className="flex items-center font-[Jeko-Bold] ">
                    <a href='#' className="text-lg font-semibold">Mohd</a>
                    <a href='#' className="text-lg font-[Jeko-Medium] ml-1">Usman</a>
                </h1>
                <div className=" md:block hidden">
                    <ul className="flex gap-4 items-center">
                        <Link href={"/blog"} id='blog-btn' className='text-[#73F8AB] cursor-pointer hover:text-[#73F8AB] menu-item'>Blog</Link>
                        <a href='#contact' id='contacts-btn' onClick={() => { setMenuClicked('contacts-btn') }} className='text-[#73F8AB] cursor-pointer hover:text-[#73F8AB] menu-item'>Contacts</a>
                        <a href='#skills' id='skills-btn' onClick={() => { setMenuClicked('skills-btn') }} className='cursor-pointer hover:text-[#73F8AB] menu-item'>Skills</a>
                        <a href='#works' id='works-btn' onClick={() => { setMenuClicked('works-btn') }} className='cursor-pointer hover:text-[#73F8AB] menu-item'>Works</a>
                        <a href='/cv.pdf' download={true} id='cv-btn' className='cursor-pointer hover:text-[#73F8AB] menu-item flex items-center gap-1'>CV <TbDownload /></a>
                    </ul>
                </div>
                <div className='md:block hidden'>
                    <ul className="flex gap-4 items-center">
                        <a href='https://twitter.com/yem_usman' target="_blank" rel="nofollow" className='flex items-center gap-1 cursor-pointer hover:text-[#73F8AB]'><AiOutlineTwitter /> Twitter</a>
                        <a href='https://github.com/aulth' target="_blank" rel="nofollow" className='flex items-center gap-1 cursor-pointer hover:text-[#73F8AB]'><AiFillGithub /> Github</a>
                        <a href='mailto:mohdusman.you@gmail.com?subject=Inquiry&body=Hello%2C%0A%0A I have a question about... ' target="_blank" rel="nofollow" className='flex items-center  cursor-pointer rounded-full border border-[#73F8AB] p-1 hover:bg-[#73F8AB] hover:text-white text-[#73F8AB]'><HiOutlineMail /></a>
                    </ul>
                </div>
                <div className='md:hidden flex items-center gap-3 text-sm'>
                        <a href='/cv.pdf' download={true} className="flex items-center mr-0 text-white hover:underline duration-100 aspect-square cursor-pointer relative hover:text-[#73F8AB]">
                        <div className="flex  items-center gap-1">
                            CV <TbDownload />
                        </div>
                        </a>
                    <Link href={"/blog"}>
                        <div className="flex items-center mr-0 text-white hover:underline duration-100 aspect-square cursor-pointer relative hover:text-[#73F8AB]">
                            Blog
                        </div></Link>
                    <button onClick={toggleMobileMenu} className="flex h-6 items-center justify-center mr-0 p-1  rounded-full border  border-[#73F8AB] hover:text-[#2D2F33] hover:bg-[#73F8AB] text-[#73F8AB] duration-100 aspect-square cursor-pointer">
                        <MdOutlineMenuOpen className='' />
                    </button>
                </div>
            </div>
            <div id='mobile-menu' className="h-screen  flex flex-col justify-between w-[250px] fixed top-0 -right-full bg-[#2D2F33] drop-shadow-xl z-30 p-4 duration-300">
                <ul className="flex flex-col gap-4 justify-start text-white">
                    <div onClick={toggleMobileMenu} className="w-full flex justify-start">
                        <MdOutlineClose className='text-[#73F8AB] cursor-pointer' />
                    </div>
                    <Link href={'/blog'} className='cursor-pointer hover:text-[#73F8AB] menu-item'>Blog</Link>
                    <a href='#contact' id='mobile-contacts-btn' onClick={() => { setMenuClicked('mobile-contacts-btn') }} className='cursor-pointer hover:text-[#73F8AB] menu-item'>Contacts</a>
                    <a href='#skills' id='mobile-skills-btn' onClick={() => { setMenuClicked('mobile-skills-btn') }} className='cursor-pointer hover:text-[#73F8AB] menu-item'>Skills</a>
                    <a href='#works' id='mobile-works-btn' onClick={() => { setMenuClicked('mobile-works-btn') }} className='cursor-pointer hover:text-[#73F8AB] menu-item'>Works</a>
                    <a href='/cv.pdf' download={true} id='mobile-cv-btn' className='cursor-pointer hover:text-[#73F8AB] menu-item flex items-center gap-1'>CV <TbDownload /></a>
                </ul>
                <ul className="flex flex-col gap-4 items-start text-white">
                    <a href='https://twitter.com/yem_usman' target="_blank" rel="nofollow" className='flex items-center gap-1 cursor-pointer hover:text-[#73F8AB]'><AiOutlineTwitter /> Twitter</a>
                    <a href='https://github.com/aulth' target="_blank" rel="nofollow" className='flex items-center gap-1 cursor-pointer hover:text-[#73F8AB]'><AiFillGithub /> Github</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar