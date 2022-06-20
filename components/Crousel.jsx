import React, { useState } from 'react'

const Crousel = () => {
    const imageLink = ['/images/1.svg', '/images/2.svg', '/images/3.svg', '/images/4.svg', '/images/5.svg']
    const [avatar, setAvatar] = useState(imageLink[0])
    const next=()=>{
        setAvatar(imageLink[(imageLink.indexOf(avatar)+1)%imageLink.length])
    }
    const prev=()=>{
        setAvatar(imageLink[(imageLink.indexOf(avatar)-1+imageLink.length)%imageLink.length])
    }
    return (
        <div style={{ minHeight: 'calc(100vh - 78px)' }} className="w-full rounded-br-[10px] hidden md:flex justify-center items-center box-border">
            <img onClick={next} className='cursor-pointer w-[40px]' src="https://img.icons8.com/ios/50/undefined/circled-chevron-left.png" />
            <div className='home-crousel'>
                <img className='w-[400px] slide slide1' src={avatar} />
            </div>
            <img onClick={prev} className='cursor-pointer w-[40px]' src="https://img.icons8.com/ios/50/undefined/circled-chevron-right.png" />
        </div>
    )
}

export default Crousel