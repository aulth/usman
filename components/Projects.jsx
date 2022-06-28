import React from 'react'
import Project from './Project'
import dynamic from 'next/dynamic'
import { projects } from './data'
const Projects = () => {

  return (

    <>
      {
        projects.map((project, index) => {
          return <Project key={index} number={index + 1} title={project.title} description={project.description} image={project.image} technology={project.technology} id={project.id} website={project.website} />
        })
      }
    </>
  )
}

export default Projects