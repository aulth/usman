import React from 'react'
import Technology from './Technology'
import { experiences } from '@/data/experiences'
import ExperienceCard from './ExperienceCard'

export default function Experiences() {
    return (
        <>
            <div className="max-w-5xl w-full mx-auto mt-[130px] font-inter">
                <h2 className="subheading">experiences</h2>
                <span className='explore'>explore now</span>
                {
                    experiences?.length>0 && experiences.map((experience)=>(
                        <ExperienceCard experience={experience} key={`exp-${experience._id}`}/>
                    ))
                }
            </div>
        </>
    )
}
