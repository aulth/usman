import React, {useState} from 'react'
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
import { MdOutlineMenuOpen, MdOutlineClose } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
const Navbar = () => {
    const toggleMobileMenu = () => {
        if(typeof window!=='undefined'){
            let mobileMenu  = document.querySelector('#mobile-menu');
            if(mobileMenu.classList.contains('-right-full')){
                mobileMenu.classList.remove('-right-full');
                mobileMenu.classList.add('right-0');
            }else{
                mobileMenu.classList.remove('right-0');
                mobileMenu.classList.add('-right-full');
            }
        }
    }
    return (
        <div className='w-screen md:px-4 sticky top-0 bg-[#2D2F33] z-20'>
            <div className="container m-auto flex justify-between items-center md:px-12 p-4 text-white text-sm">
                <div className="flex items-center font-[Jeko-Bold] ">
                    <h2 className="text-lg font-semibold">Mohd</h2>
                    <h2 className="text-lg font-[Jeko-Medium]">Usman</h2>
                </div>
                <div className=" md:block hidden">
                    <ul className="flex gap-4 items-center">
                        <li id='contacts-btn' className='text-[#73F8AB] cursor-pointer hover:text-[#73F8AB]'>Contacts</li>
                        <li id='skills-btn' className='cursor-pointer hover:text-[#73F8AB]'>Skills</li>
                        <li id='works-btn' className='cursor-pointer hover:text-[#73F8AB]'>Works</li>
                    </ul>
                </div>
                <div className='md:block hidden'>
                    <ul className="flex gap-4 items-center">
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#73F8AB]'><AiOutlineTwitter /> Twitter</li>
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#73F8AB]'><AiFillGithub /> Github</li>
                        <li className='flex items-center  cursor-pointer rounded-full border border-[#73F8AB] p-1 hover:bg-[#73F8AB] hover:text-white text-[#73F8AB]'><HiOutlineMail /></li>
                    </ul>
                </div>
                <div  onClick={toggleMobileMenu} className="md:hidden flex items-center mr-4 p-1  rounded-full border  border-[#73F8AB] hover:text-[#2D2F33] hover:bg-[#73F8AB] text-[#73F8AB] duration-100 aspect-square cursor-pointer">
                    <MdOutlineMenuOpen className='' />
                </div>
            </div>
            <div id='mobile-menu' className="h-screen  flex flex-col justify-between w-[250px] fixed top-0 -right-full bg-[#2D2F33] drop-shadow-xl z-30 p-4 duration-300">
                    <ul className="flex flex-col gap-4 justify-start text-white">
                        <div  onClick={toggleMobileMenu} className="w-full flex justify-start">
                            <MdOutlineClose className='text-[#73F8AB] cursor-pointer' />
                        </div>
                        <li id='contacts-btn' className='cursor-pointer hover:text-[#73F8AB]'>Contacts</li>
                        <li id='skills-btn' className='cursor-pointer hover:text-[#73F8AB]'>Skills</li>
                        <li id='works-btn' className='cursor-pointer hover:text-[#73F8AB]'>Works</li>
                    </ul>
                    <ul className="flex flex-col gap-4 items-start text-white">
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#73F8AB]'><AiOutlineTwitter /> Twitter</li>
                        <li className='flex items-center gap-1 cursor-pointer hover:text-[#73F8AB]'><AiFillGithub /> Github</li>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar