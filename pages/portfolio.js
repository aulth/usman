import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Portfolio = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/portfolio.jpg',
        description: 'My own portfolio',
        demo: 'https://mohd-usman.vercel.app/',
        github: 'https://github.com/aulth/usman',
        website: 'https://mohd-usman.vercel.app/',
        logo:'https://i.ibb.co/3NN64R4/usman.jpg',
        title: 'Portfolio',
        created:'02/03/22',
        updated:'20/06/22'
    }
    const technology = { html: true, css: true, js:true, nodejs:true, reactjs:true, nextjs:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>Portfolio : Mohd Usman</title>
                <meta name="description" content="Full Stack Web Developer" />
                <meta property="og:image" content="/projects/portfolio.jpg" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="1024" />
            </Head>
            <ProjectPage data={data} technology={technology} />
        </>
    )
}
export async function getServerSideProps(context) {
    let { req , resolvedUrl} = context;
    console.log(resolvedUrl)
    let link;
    if(req){
        link = 'https://'+req.headers.host+resolvedUrl;
    }else{
        link = window.location.protocol+window.location.hostname+window.location.pathname;
    }
    console.log(link)
    return {
        props: {
            link: link
        }
    }
}
export default Portfolio