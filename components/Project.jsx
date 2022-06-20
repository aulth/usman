import React from 'react'
import Technology from './Technology'
import Link from 'next/link'
const Project = (props) => {
    const showLink = (id)=>{
        let elem = document.getElementById(id)
        elem.style.display = 'flex'
    }
    const hideLink = (id)=>{
        let elem = document.getElementById(id)
        elem.style.display = 'none'

    }
    return (
        <>
            <div className="project glass md:h-[160px] md:w-[190px] w-full rounded rounded-t-small m-1 flex md:flex-col box-border">
                <div className="project-image relative">
                    <img  onMouseEnter={() => {showLink(props.id)}} src={props.image} alt={props.title} className='w-[200px]' />
                    <div  onMouseLeave={()=>{hideLink(props.id)}} className="w-full absolute h-full top-0 glass justify-center items-center hidden transition duration-300" id={props.id}>
                        <div className="glass rounded px-1">
                            <Link  href={`/${props.id}`}><button className='pr-1 hover:underline hover:text-black text-gray-600'>Info</button></Link>
                            <a href={props.website} rel='noreferrer' target="_blank"><button className='border-l border-orange-400 pl-1 hover:underline hover:text-black text-gray-600'> Demo</button></a>
                        </div>
                    </div>
                    <div className="md:flex glass absolute right-0 bottom-0 hidden">
                        <Technology technology={props.technology} width={20} />
                    </div>
                </div>
                <div className="w-full pl-1 relative">
                    <Link href={`/${props.id}`}><h2 className="font-semibold text-lg cursor-pointer hover:drop-shadow">{props.title}</h2></Link>
                    <div className="glass absolute right-0 top-0 hidden md:block">#{props.number}</div>
                    <p className='text-sm'>{props.description}</p>
                    <div className="md:hidden mt-1 flex">
                        <Technology technology={props.technology} width={20} />
                        <div className="glass absolute right-0 bottom-0 px-1">#{props.number}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project