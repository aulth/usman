import React, { useState, useEffect } from 'react'
import { AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import { MdOutlineMenuOpen, MdOutlineClose } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import Link from 'next/link'
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
        document.body.style.backgroundColor = "#F8FAFC";
        if(menuClicked!==null){
            document.querySelector(`#${menuClicked}`).classList.add('text-[#73F8AB]')
        }
    }, [menuClicked])

    return (
        <div className='w-screen md:px-4 sticky top-0 bg-white z-20'>
            <div className="container m-auto flex justify-between items-center md:px-12 p-4 text-gray-800 text-sm">
                <Link  href="/blog" className="flex items-center font-[Jeko-Bold] relative ">
                    <label className='absolute -right-6 -top-[2px] text-[8px] bg-cyan-500 text-white p-1 h-3 rounded-t-full rounded-r-full flex items-center'>blog</label>
                    <span className="text-lg font-semibold">Mohd</span>
                    <span className="text-lg font-[Jeko-Medium] ml-1">Usman</span>
                </Link>
                <div className=" md:block hidden">
                    <ul className="flex gap-4 items-center">
                        <Link href={'/'} id='portfolio-btn'  className='cursor-pointer hover:text-cyan-500 menu-item'>Portfolio</Link>
                        <a href='#skills' id='skills-btn' className='cursor-pointer hover:text-cyan-500 menu-item'>Story</a>
                        <a href='#works' id='works-btn'   className='cursor-pointer hover:text-cyan-500 menu-item'>Tips</a>
                        <a href='#works' id='thoughts-btn'   className='cursor-pointer hover:text-cyan-500 menu-item'>Thoughts</a>
                    </ul>
                </div>
                <div className='md:block hidden'>
                    <ul className="flex gap-4 items-center">
                        <a  href='https://twitter.com/yem_usman'  target="_blank"  className='flex items-center gap-1 cursor-pointer hover:text-blue-400'><AiOutlineTwitter /> Twitter</a>
                        <a href='https://github.com/aulth' target="_blank"  className='flex items-center gap-1 cursor-pointer hover:text-[rgb(222,40,123)]'><AiFillInstagram /> Instargam</a>
                        <a href='mailto:mohdusman.you@gmail.com?subject=Inquiry&body=Hello%2C%0A%0A I have a question about... ' target="_blank"  className='flex items-center  cursor-pointer rounded-full border border-red-400 p-1 hover:bg-red-400 hover:text-white text-red-400'><HiOutlineMail   /></a>
                    </ul>
                </div>
                <div onClick={toggleMobileMenu} className="md:hidden flex items-center mr-0 p-1  rounded-full border  border-cyan-500 hover:text-white hover:bg-cyan-400 text-cyan-500 duration-100 aspect-square cursor-pointer">
                    <MdOutlineMenuOpen className='' />
                </div>
            </div>
            <div id='mobile-menu' className="h-screen  flex flex-col justify-between w-[250px] fixed top-0 -right-full bg-white drop-shadow-xl z-50 p-4 duration-300">
                <ul className="flex flex-col gap-4 justify-start text-gray-800">
                    <div onClick={toggleMobileMenu} className="w-full flex justify-start">
                        <MdOutlineClose className='text-cyan-500 cursor-pointer' />
                    </div>
                    <a href='#contact' id='mobile-contacts-btn'   className='cursor-pointer hover:text-cyan-500 menu-item'>Story</a>
                    <a href='#skills' id='mobile-skills-btn'    className='cursor-pointer hover:text-cyan-500 menu-item'>Tips</a>
                    <a href='#works' id='mobile-works-btn'   className='cursor-pointer hover:text-cyan-500 menu-item'>TThoughts</a>
                </ul>
                <ul className="flex flex-col gap-4 items-start text-gray-800">
                    <a href='https://twitter.com/yem_usman' target="_blank"  className='flex items-center gap-1 cursor-pointer hover:text-cyan-500'><AiOutlineTwitter /> Twitter</a>
                    <a href='https://instagram.com/yem.usman' target="_blank" className='flex items-center gap-1 cursor-pointer hover:text-cyan-500'><AiFillInstagram /> Instagram</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar