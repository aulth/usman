import React, { useMemo } from 'react'
import { Experience } from '@/models/experience'
import { Technology } from '@/models/technology'
import { getTechnologyByIds } from '@/lib/projects';
import TechnologyBadge from '../Skills/TechnologyBadge';

function ExperienceCard({ experience }: { experience: Experience }) {
    const technologies: Technology[] = useMemo(
        () => getTechnologyByIds(experience.technologies),
        [experience._id]
    );

    return (
        <>
            <div className="w-full mt-[40px] text-white">
                <div className="w-full flex items-center justify-between">
                    <div className='flex  md:flex-row flex-col md:items-center'>
                        <h3 className='md:font-bold font-semibold tracking-tight md:text-[23px] text-lg capitalize md:mr-1'>{experience?.company} /</h3>
                        <h4 className='md:font-light font-extralight tracking-tight md:text-xl text-sm md:mt-0.5 text-primary'>{experience?.role}</h4>
                    </div>
                    <div className='flex  md:flex-row flex-col md:gap-2 md:items-center items-end uppercase text-primary md:text-sm text-xsm  font-light'>
                        <h3>{experience?.period}</h3>
                        <h4>{experience?.location}</h4>
                    </div>
                </div>
                {experience?.responsibility.split('\n').map((text: string, index: number) => (
                    <p key={`text-${index + 1}`} className="text-left text-white md:text-[15px] text-[14px] font-light mt-[15px] tracking-wide leading-relaxed">
                        {text}
                    </p>
                ))}
                <div className='mt-[20px] flex md:gap-4 gap-2 flex-wrap'>
                    {technologies?.length > 0 && technologies.map((technology) => (
                        <TechnologyBadge key={`exp-tech-${technology._id}`} technology={technology} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ExperienceCard