import React from 'react'
import Project from './Project'
const Projects = () => {
  const projects = [
    {
      title: 'Add2Cart',
      description: 'E-commerce website',
      image: '/projects/add2cart.png', 
      technology: {html:true, css:true, js:true, reactjs:true,nextjs:true, nodejs:true, mongodb:true, tailwind:true},
      id: 'add2cart',
      website: 'https://add2cart.vercel.app/',
    },
    {
      title: 'Atm Machine',
      description: 'Atm machine game',
      image: '/projects/atm.png',
      technology: {html: true, css:true, js:true, reactjs:true, tailwind:true},
      id: 'atm',
      website: 'https://aulth.github.io/atm/',
    },
    {
      title: 'AulthLink',
      description: 'Link Shortner',
      image: '/projects/aulthlink.png',
      technology: {html: true, css:true, js:true, reactjs:true, nodejs:true, tailwind:true},
      id: 'aulthlink',
      website: 'https://aulthlink.vercel.app/',
    },
    {
      title : 'BijliVibhag',
      description: 'Study Material Platform',
      image: '/projects/bijlivibhag.jpg',
      technology: {html: true, css:true, js:true},
      id: 'bijlivibhag',
      website: 'https://aulth.github.io/bijlivibhag/',
    },
    {
      title : 'CloudNote',
      description: 'Online Note Writing Platform',
      image: '/projects/cloudnote.png',
      technology:{html:true,css:true,js:true, reactjs:true, nodejs:true, vercel:true, heroku:true},
      id: 'cloudnote',
      website: 'https://cloudnote.vercel.app/',
    },
    {
      title : 'CollegeQuora',
      description: 'Online Student Forum',
      image: '/projects/collegequora.png',
      technology: {html:true,css:true,js:true, reactjs:true, nodejs:true, heroku:true},
      id: 'collegequora',
      website: 'https://collegequora.herokuapp.com/',
    },
    {
      title : 'Digital Clock',
      description: 'Simple digital clock',
      image: '/projects/digital-clock.jpg',
      technology: {html:true,css:true,js:true},
      id: 'digital-clock',
      website: 'https://aulth.github.io/digital-clock/',
    },
    {
      title : 'Email Spemmer',
      description: 'Send email (anonymous)',
      image: '/projects/email-spemmer.png',
      technology:{html:true,css:true,js:true, reactjs:true, nodejs:true, vercel:true, heroku:true},
      id: 'emailspemmer',
      website: 'https://email-spemmer.vercel.app/',
    },
    {
      title : 'NewsShort',
      description: 'Summrize News from Inshort',
      image: '/projects/newsshort.png',
      technology: {html:true,css:true,js:true, reactjs:true, vercel:true},
      id: 'newsshort',
      website: 'https://newsshort.vercel.app/',
    },
    {
      title : 'Panda',
      description: 'My Blog',
      image: '/projects/panda.png',
      technology: {html:true,css:true,js:true, reactjs:true, nodejs:true, nextjs:true, vercel:true},
      id: 'panda',
      website: 'https://mypanda.vercel.app/',
    },
    {
      title : 'Portfolio',
      description: 'My own portfolio',
      image: '/projects/portfolio.jpg',
      technology: {html:true,css:true,js:true, reactjs:true, nextjs:true},
      id: 'portfolio',
      website: 'https://aulth.github.io/usman/',
    },
    {
      title : 'Quran',
      description: 'Zuz wise complete quran',
      image: '/projects/quran.png',
      technology: {html:true,css:true,js:true, reactjs:true, vercel:true},
      id: 'quran',
      website: 'https://full-quran.vercel.app/',
    },
    {
      title : 'TextMonkey',
      description: 'Text Utilizer',
      image: '/projects/textmonkey.png',
      technology: {html:true,css:true,js:true, reactjs:true},
      id: 'textmonkey',
      website: 'https://aulth.github.io/textmonkey/',
    },
    {
      title : 'Village Website',
      description: 'Simple web page for village',
      image: '/projects/saibuzurg.jpg',
      technology: {html:true,css:true,bootstrap:true},
      id: 'saibuzurg',
      website: 'https://saibuzurg.w3spaces.com/',
    },
    {
      title : 'Weather Monkey',
      description: 'Weather with map',
      image: '/projects/weather-monkey.png',
      technology: {html:true,css:true,js:true, reactjs:true, vercel:true},
      id: 'weathermonkey',
      website: 'https://weather-monkey.vercel.app/',
    }
  ]
  return (
    <>
    {
      projects.map((project, index)=>{
        return <Project key={index} number={index+1} title={project.title} description={project.description} image={project.image} technology={project.technology} id={project.id} website={project.website} />
      })
    }
    </>
  )
}

export default Projects