import React from 'react'

const Skill = (props) => {
    return (
        <div className='flex md:w-[48%] w-full glass items-center mt-1'>
            <img src={props.image} className='w-[30px]' alt="" />
            <div className="w-full">
                <div style={{width:`${props.percentage}%`}} className={` flex justify-between bg-orange-200 hover:bg-green-200 px-1 cursor-pointer`}>
                    <p>{props.technology}</p>
                    <p>{props.percentage}%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill