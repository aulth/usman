import React from 'react'
import Skill from './Skill'

const Skills = () => {
    const skills = [
        {
            technology: 'HTML',
            percentage: 72,
            image: '/technology/html.svg',
            color:'rgb(246,99,0)'
        },
        {
            technology: 'CSS',
            percentage: 70,
            image: '/technology/css.svg',
            color:'rgb(3,155,229)'
        },
        {
            technology: 'JavaScript',
            percentage: 65,
            image: '/technology/js.svg',
            color:'rgb(255,214,0)'
        },
        {
            technology: 'ReactJS',
            percentage: 80,
            image: '/technology/reactjs.svg',
            color:'#61dafb'
        },
        {
            technology: 'NodeJS',
            percentage: 60,
            image: '/technology/nodejs.svg',
            color:'rgb(76,175,80)'
        },
        {
            technology: 'ExpressJS',
            percentage: 55,
            image: '/technology/express.svg',
            color:'#f9de3f'
        },
        {
            technology: 'MongoDB',
            percentage: 40,
            image: '/technology/mongodb.svg',
            color:'#589636'
        },
        {
            technology: 'TailwindCSS',
            percentage: 42,
            image: '/technology/tailwind.svg',
            color:'rgb(6,182,212)'
        },
        {
            technology: 'GitHub',
            percentage: 50,
            image: '/technology/github.svg',
            color:'rgb(0,0,0)'
        },
        {
            technology: 'NextJS',
            percentage: 75,
            image: '/technology/nextjs.svg',
            color:'#61dafb'
        },
        {
            technology: 'Blogger',
            percentage: 90,
            image: '/technology/blogger.svg',
            color:'rgb(255,111,0)'
        },
        {
            technology:'C++',
            percentage: 45,
            image: '/technology/cpp.svg',
            color:'rgb(0,134,212)'
        }
    ]
    //srot skills
    skills.sort((a, b) => {
        return a.percentage - b.percentage
    })
    return (
        <div className="skills w-full flex flex-wrap justify-around mt-[50px] md:px-2 px-1">
            {
                skills.map(skill=>{
                    return <Skill key={skill.technology} color={skill.color} technology={skill.technology} percentage={skill.percentage} image={skill.image} />
                })
            }
        </div>
    )
}

export default Skills