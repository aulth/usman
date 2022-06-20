import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const CloudNote = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/cloudnote.png',
        description: 'Write your notes in cloud and access them anywhere',
        demo: 'https://cloudnote.vercel.app/',
        github: 'https://github.com/aulth/cloud-note',
        website: 'https://cloudnote.vercel.app/',
        logo:'https://cloudnote.vercel.app/logo192.png',
        title: 'CloudNote',
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>Cloud Note</title>
                <meta name="description" content="Write your notes in cloud and access them anywheren" />
                <meta property="og:image" content="/projects/cloudnote.png" />
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
export default CloudNote