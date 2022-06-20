import React from 'react'
import Skill from './Skill'

const Skills = () => {
    const skills = [
        {
            technology: 'HTML',
            percentage: 72,
            image: '/technology/html.svg',
        },
        {
            technology: 'CSS',
            percentage: 70,
            image: '/technology/css.svg',
        },
        {
            technology: 'JavaScript',
            percentage: 65,
            image: '/technology/js.svg',
        },
        {
            technology: 'ReactJS',
            percentage: 80,
            image: '/technology/reactjs.svg',
        },
        {
            technology: 'NodeJS',
            percentage: 60,
            image: '/technology/nodejs.svg',
        },
        {
            technology: 'ExpressJS',
            percentage: 55,
            image: '/technology/express.svg',
        },
        {
            technology: 'MongoDB',
            percentage: 40,
            image: '/technology/mongodb.svg',
        },
        {
            technology: 'TailwindCSS',
            percentage: 42,
            image: '/technology/tailwind.svg',
        },
        {
            technology: 'GitHub',
            percentage: 50,
            image: '/technology/github.svg',
        },
        {
            technology: 'NextJS',
            percentage: 75,
            image: '/technology/nextjs.svg',
        },
        {
            technology: 'Blogger',
            percentage: 90,
            image: '/technology/blogger.svg',
        },
        {
            technology:'C++',
            percentage: 45,
            image: '/technology/cpp.svg',
        }
    ]
    //srot skills
    skills.sort((a, b) => {
        return a.percentage - b.percentage
    })
    return (
        <div className="skills w-full flex flex-wrap justify-around mt-[50px] md:px-0 px-1">
            {
                skills.map(skill=>{
                    return <Skill key={skill.technology} technology={skill.technology} percentage={skill.percentage} image={skill.image} />
                })
            }
        </div>
    )
}

export default Skills