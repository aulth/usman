import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="w-screen bg-gray-800 text-white">
            <div className="container m-auto px-4 md:px-12 py-4 flex flex-col md:flex-row md:justify-between items-center md:items-stretch">
                <div className="flex flex-col items-start w-full md:w-1/3">
                    <h2 className="font-bold">
                        Mohd Usman
                    </h2>
                    <p>
                        Full Stack Web Developer, I started this blog to share some of my thoughts with the world.
                    </p>
                </div>
                <div className='flex gap-4 text-2xl'>
                    <a href="#"  className='hover:text-blue-400'>
                        <FaFacebookSquare />
                    </a>
                    <a href="#" className='hover:text-[rgb(222,40,123)]'>
                        <AiFillInstagram />
                    </a>
                    <a href="#"  className='hover:text-blue-400' >
                        <AiFillTwitterCircle />
                    </a>
                </div>
            </div>
            <div className="container m-auto bg-black text-white px-12 p-2 flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex">&copy; Mohd Usman | All Rights Reserved</div>
                <div className="flex gap-4">
                    <a href="#" className='hover:text-cyan-400'>
                        Home
                    </a>
                    <a href="#" className='hover:text-cyan-400'>
                        Disclaimer
                    </a>
                    <a href="#" className='hover:text-cyan-400'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer