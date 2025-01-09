import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <>
            <div className='md:max-w-[587px] w-full h-auto mx-auto md:mt-[26px] mt-[70px]'>
                <div className="aspect-square rounded-full mx-auto w-[200px] bg-[#1A1A1A]">
                    <img src="/images/portfolio/face.png" className='rounded-full w-full' />
                </div>
                <h2 className="font-poppins font-bold text-center text-white md:text-[45px] text-[38px]  tracking-[-2.25px] mt-[20px]">Mohd Usman!</h2>
                <h3 className="font-bold font-poppins text-center md:text-2xl text-[22px] tracking-tighter md:mt-[8px] opacity-80 text-primary">I do Code & Sleep 💤</h3>
                <p className="max-w-[587px] font-poppins md:text-[16px] text-[15px] mx-auto text-center text-primary mt-[20px]">
                    Passionate Software Developer specializing in Next.js and Spring Boot, dedicated to building scalable, elegant, and user-friendly web applications.
                </p>
                <div className="flex md:gap-8 gap-4 items-center justify-center max-[587px] mx-auto mt-[20px] text-white">
                    <a href="http://github.com/aulth" target="_blank" rel="noopener noreferrer">
                        <Github strokeWidth={1} />
                    </a>
                    <a href="http://github.com/aulth" target="_blank" rel="noopener noreferrer">
                        <Facebook strokeWidth={1} />
                    </a>
                    <a href="http://github.com/aulth" target="_blank" rel="noopener noreferrer">
                        <Linkedin strokeWidth={1} />
                    </a>
                    <a href="http://github.com/aulth" target="_blank" rel="noopener noreferrer">
                        <Instagram strokeWidth={1} />
                    </a>
                    <a href="http://github.com/aulth" target="_blank" rel="noopener noreferrer">
                        <Twitter strokeWidth={1} />
                    </a>
                </div>
            </div>
        </>
    )
}
