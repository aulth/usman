import React from 'react'
import Image from 'next/image'
const Skill = (props) => {
    return (
        <>
            <div className="w-full box-border rounded-lg p-1 justify-between items-center border border-gray-200 my-1 flex">
                <div className="bg-[#E2F0FF] flex items-center p-1 rounded-lg">
                    <Image src={props.image} alt={props.technology} width={30} height={30} />
                </div>
                <div className="w-full flex flex-col justify-around px-2 h-full">
                    <div className="w-full flex justify-between">
                        <h2 className="font-semibold">{props.technology}</h2>
                        <p>{props.percentage}%</p>
                    </div>
                    <div className="w-full bg-gray-300 h-2 rounded">
                        <div style={{width:`${props.percentage}%`}} className="bg-[#FB8574] h-2 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill