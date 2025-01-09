import React from 'react'
import { technologies } from '@/data/technologies'
import TechnologyBadge from './TechnologyBadge'

export default function MySkills() {
    return (
        <>
            <div className="max-w-5xl w-full mx-auto mt-[130px] font-inter">
                <h2 className="subheading">My Skills</h2>
                <span className='explore'>explore now</span>
                <div className="w-full mt-[40px] mx-auto flex justify-center flex-wrap gap-4">
                    {
                        technologies && [...technologies.values()].map((technology) => (
                            <TechnologyBadge key={`tech-${technology._id}`} technology={technology} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
