import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Add2Cart = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/saibuzurg.jpg',
        description: 'This is a website for the village of Sai Buzurg, which is a part of the Sant Kabir Nagar district of Uttar Pradesh.',
        demo: 'https://saibuzurg.w3spaces.com/',
        github: 'https://github.com/aulth/sai-buzurg',
        website: 'https://saibuzurg.w3spaces.com/',
        logo:'https://saibuzurg.w3spaces.com/favicon.jpg',
        title: 'Sai Buzurg',
    }
    const technology = { html: true, css: true, bootstrap:true}
    return (
        <>
            <Head>
                <title>Sai Buzurg</title>
                <meta name="description" content="Web page for sai buzurg village" />
                <meta property="og:image" content="/projects/saibuzurg.jpg" />
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
export default Add2Cart