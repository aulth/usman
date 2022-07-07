import React from 'react'
// import Share from './Share'
import Link from 'next/link'
import Image from 'next/image'
const Appsidebar = (props) => {
    const handleShare = async ()=>{
        let shareData = {
            title: props.title,
            description: props.description,
            url: props.link,
        }
        try{
           await navigator.share(shareData);
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div style={{ minHeight: 'calc(100vh - 46px' }} className="glass md:w-[25%] w-full rounded-lg overflow-y-auto">
            <div style={{ minHeight: 'calc(100vh - 240px' }} className="w-full flex flex-col items-center justify-around">
                <Image  src={props.logo} alt="add2cart" width={140} height={140}  />
                <div className="w-full text-center">
                    <h2 className="font-bold text-2xl">{props.title}</h2>
                    <h3 className='text-sm font-semibold'>By Mohd Usman</h3>
                </div>
                <div className="text-center">
                    <a href={props.website} target="_blank" rel='noreferrer'  ><button className="text-center p-1 w-[150px] mt-2 bg-orange-300 rounded block">Open</button></a>
                    <a href={props.github} target="_blank" rel='noreferrer' ><button className="text-center p-1 w-[150px] mt-2 border border-orange-300 rounded block">Github</button></a>
                    <Link href="/" ><button className="text-center p-1 w-[150px] mt-2 border border-orange-300 rounded block">Back to Home</button></Link>
                </div>
            </div>
            <div className="w-full fixed flex justify-between items-center bottom-0 p-2 box-border">
                <div className="flex items-center">
                    <Image  src="https://img.icons8.com/fluency/48/undefined/planner.png" width={20} height={20}  alt="time" />
                    <p className='font-semibold text-[12px] ml-1  inline'>Created: {props.created}</p>
                    <p className='font-semibold text-[12px] ml-1 inline'>Updated : {props.updated}</p>
                </div>
                <Image onClick={handleShare}  src="https://img.icons8.com/fluency/48/undefined/share--v2.png" className='cursor-pointer' width={20} height={20}  alt="Share" />
            </div>
        </div>
    )
}

export default Appsidebar