"use client"
import React, { useRef, useEffect } from 'react'
import { Button } from '../../ui/button'
import { Menu } from 'lucide-react'
export default function MobileMenu() {
    const menu = useRef<HTMLUListElement | null>(null);
    const menuButton = useRef<HTMLButtonElement | null>(null);
    useEffect(() => {
        const toggleMenu = (): void => {
            if (menu.current?.classList.contains("max-h-0")) {
                menu.current.classList.remove("max-h-0");
                menu.current.classList.add("max-h-[500px]")
            } else {
                menu.current?.classList.remove("max-h-[500px]");
                menu.current?.classList.add("max-h-0");
            }
        }
        if (menuButton.current) {
            menuButton.current.addEventListener("click", toggleMenu);
        }

        return () => {
            if (menuButton.current) {
                menuButton.current.removeEventListener("click", toggleMenu);
            }
        }
    }, [])

    return (
        <nav>
            <Button ref={menuButton} className='text-primary bg-transparent md:hidden inline-block hover:border'>
                <Menu strokeWidth={2} />
            </Button>
            <ul ref={menu} className='flex md:flex-row flex-col md:static absolute md:w-auto w-full md:max-h-[500px] max-h-0 md:shadow-none shadow-lg overflow-hidden md:bg-transparent bg-white/20 backdrop-blur-sm transition-all duration-150 md:mt-0 mt-2  gap-4 left-0'>
                <li className='md:p-0 pt-4'>
                    <a href="#about-me"><Button className='md:!rounded-button md:shadow shadow-none md:w-auto w-full md:border md:border-primary border-none bg-transparent text-sm font-medium font-poppins text-left inline-block'>About me</Button></a>
                </li>
                <li className='md:p-0 pb-4'>
                    <a href="#contact"><Button className='md:!rounded-button md:shadow shadow-none md:w-auto w-full md:text-black text-primary md:bg-white bg-transparent md:border border-none font-poppins font-medium text-left  text-sm  inline-block  hover:md:bg-secondary '>Contact</Button></a>
                </li>
            </ul>
        </nav>
    )
}
