import React from 'react'
import Carousel from './Carousel'
import ProjectInfo from './ProjectInfo'
import { Project } from '@/models/project'
import Technology from '../Experiences/Technology'

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <>
            <div className="max-w-5xl w-full mx-auto mt-[130px] font-inter">
                <h2 className="subheading">projects</h2>
                <span className='explore'>explore now</span>
                {
                    projects.length > 0 && projects.map((project, index) => (
                        <div key={`project-${project._id}`} className="mt-[40px] w-full grid 1k:grid-cols-2 md:gap-8 gap-6 text-white">
                            <Carousel images={project.images} />
                            <ProjectInfo data={project} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
