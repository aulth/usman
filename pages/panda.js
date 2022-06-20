import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Panda = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/panda.png',
        description: 'Blogging app',
        demo: 'https://mypanda.vercel.app/',
        github: 'https://github.com/aulth/panda',
        website: 'https://mypanda.vercel.app/',
        logo:'https://mypanda.vercel.app/favicon.ico',
        title: 'MyPanda',
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, nextjs:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>Panda : Blog</title>
                <meta name="description" content="Blogging app" />
                <meta property="og:image" content="/projects/panda.png" />
                <meta property="og:image:type" content="image/png" />
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
export default Panda