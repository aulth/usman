import React from 'react'
import Share from './Share'
import Link from 'next/link'
const Appsidebar = (props) => {
    return (
        <div style={{ minHeight: 'calc(100vh - 46px' }} className="glass md:w-[25%] w-full rounded-lg overflow-y-auto">
            <Link href={'/'} ><img src="https://img.icons8.com/ios/50/undefined/back--v1.png" className='w-[20px] absolute top-2 left-1 cursor-pointer' alt="" /></Link>
            <div style={{minHeight:'calc(100vh - 240px'}} className="w-full flex flex-col items-center justify-around">
                <img src={props.logo} alt="add2cart" className='w-[140px]' />
                <div className="w-full text-center">
                <h2 className="font-bold text-2xl">{props.title}</h2>
                <h3 className='text-sm font-semibold'>By Mohd Usman</h3>
                </div>
                <div className="text-center">
                <a href={props.website} target="_blank"  rel='noreferrer'  ><button className="text-center p-1 w-[150px] mt-2 bg-orange-300 rounded block">Open</button></a>
                <a href={props.github} target="_blank"  rel='noreferrer' ><button className="text-center p-1 w-[150px] mt-2 border border-orange-300 rounded">Github</button></a>
                </div>
            </div>
            <div className="w-full px-2 fixed bottom-[36px]">
                <div className="glass w-full py-2 rounded">
                    <Share description={props.description} link={props.link} />
                </div>
            </div>
            <div className="w-full fixed flex justify-between items-center bottom-0 p-2 box-border">
                <div className="flex items-center">
                    <img src="https://img.icons8.com/fluency/48/undefined/planner.png" className='w-[20px]' alt="" />
                    <p className='font-semibold text-sm ml-1  inline'>Created: {props.created}</p>
                    <p className='font-semibold text-sm ml-1 inline'>Updated : {props.updated}</p>
                </div>
                <img src="https://img.icons8.com/fluency/48/undefined/share--v2.png" className='w-[20px]' alt="" />
            </div>
        </div>
    )
}

export default Appsidebar