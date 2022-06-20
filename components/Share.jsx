import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
const Share = (props) => {
    const router = useRouter()
    const copyLink=()=>{
        navigator.clipboard.writeText(props.link);
        document.getElementById('link-copy').textContent = 'Link Copied'
    }
    return (
        <>
            <div className="w-full flex box-border  justify-around ">
                <div className='  w-2/6 flex flex-col justify-center items-center'>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${props.link}`}><img src="/social/facebook.svg" className='w-[50px] p-1' alt="" /></a>
                    <h3 className='text-sm font-semibold'>Facebook</h3>
                </div>
                <div className=' w-2/6 flex flex-col justify-center items-center'>
                    <a href={`https://twitter.com/intent/tweet?text=${props.description}+${props.link}`}><img src="/social/twitter.svg" className='w-[50px] p-1' alt="" /></a>
                    <h3 className='text-sm font-semibold'>Twitter</h3>
                </div>
                <div className=' w-2/6 flex flex-col justify-center items-center'>
                    <a href={`https://api.whatsapp.com/send?text=${props.description}\n${props.link}`}><img src="/social/whatsapp.svg" className='w-[50px] p-1' alt="" /></a>
                    <h3 className='text-sm font-semibold'>Whatsapp</h3>
                </div>
            </div>
            <div className="w-full flex box-border  justify-around">
                <div className='  w-2/6 flex flex-col justify-center items-center'>
                    <a href={`https://telegram.me/share/url?url=${props.link}&text=${props.description}`}><img src="/social/telegram.svg" className='w-[50px] p-1' alt="" /></a>
                    <h3 className='text-sm font-semibold'>Telegram</h3>
                </div>
                <div className=' w-2/6 flex flex-col justify-center items-center'>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.link}`}><img src="/social/linkedin.svg" className='w-[50px] p-1' alt="" /></a>
                    <h3 className='text-sm font-semibold'>Linkedin</h3>
                </div>
                <div className='  w-2/6 flex flex-col justify-center items-center'>
                    <img src="https://img.icons8.com/fluency/48/undefined/copy.png" onClick={()=>{copyLink()}} className='w-[50px] p-1 cursor-pointer' alt="" />
                    <h3 className='text-sm font-semibold' id='link-copy'>Copy Link</h3>
                </div>
            </div>
        </>
    )
}

export default Share