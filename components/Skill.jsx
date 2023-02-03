import React from 'react'
import { VscDebugBreakpointFunction } from 'react-icons/vsc'

const Skill = ({title, percent, color}) => {
    return (
        <div className='w-[48%] text-white'>
            <p>{title}</p>
            <div className="w-full h-2 bg-gray-200">
                <div style={{width:`${percent}%`, background:color}} className={`h-2 relative`}>
                    <div className='absolute -top-3 -right-2'>
                        <span className='absolute -top-4 -right-2 text-sm'>{percent}%</span>
                        <VscDebugBreakpointFunction className='rotate-180 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill