import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Aulthlink = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/aulthlink.png',
        description: 'Link shortner for your long links',
        demo: 'https://aulthlink.vercel.app/',
        github: 'https://github.com/aulth/link-shortner',
        website: 'https://aulthlink.vercel.app/',
        logo:'https://aulthlink.vercel.app/logo192.png',
        title: 'Aulthlink',
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, mongodb:true, heroku:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>AulthLink</title>
                <meta name="description" content="Link shortner for your long links" />
                <meta property="og:image" content="/projects/aulthlink.png" />
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
export default Aulthlink