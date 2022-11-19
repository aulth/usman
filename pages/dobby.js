import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Dobby = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/dobby.png',
        description: 'Host your images online freely.',
        demo: 'https://mohd-usman-dobby.vercel.app/',
        github: 'https://github.com/aulth/mohd-usman-dobby',
        website: 'https://mohd-usman-dobby.vercel.app/',
        logo:'/logo/dobby.png',
        title: 'dobby',
        created:'16/11/22',
        updated:'16/11/22'
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, nextjs:true, mongodb:true, vercel:true, github:true,tailwind:true, cloudinary:true}
    return (
        <>
            <Head>
                <title>Dobby</title>
                <meta name="description" content="Free onlie image hosting" />
                <meta property="og:image" content="/projects/dobby.png" />
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
    let link;
    if(req){
        link = 'https://'+req.headers.host+resolvedUrl;
    }else{
        link = window.location.protocol+window.location.hostname+window.location.pathname;
    }
    return {
        props: {
            link: link
        }
    }
}
export default Dobby