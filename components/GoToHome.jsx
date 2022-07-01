import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const GoToHome = () => {
    return (
        <div className='fixed bottom-4 right-4 transition  hover:scale-[1.25] cursor-pointer' >
            <Link href="/" >
                <Image src="/images/home.svg" width={20} height={20} className="" title='Go To Home' alt='GoToHome' />
            </Link>
        </div>
    )
}

export default GoToHome