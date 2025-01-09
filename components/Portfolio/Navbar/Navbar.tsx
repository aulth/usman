import React from 'react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
    return (
        <header>
            <div className="w-full  md:max-w-5xl flex justify-between mx-auto py-4">
                <div className='font-poppins text-white'>
                    <h1 className='font-bold text-[21px]'>Mohd Usman</h1>
                    <h2 className='uppercase text-xxxsm tracking-widest font-light text-right -mr-[5.5px] -mt-2'>developer</h2>
                </div>
                <MobileMenu />
            </div>
        </header>
    )
}
