import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const BijliVibhag = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/bijlivibhag.jpg',
        description: 'Study material platform for 3rd sem Electrical Engineering students (specially for JMI)',
        demo: 'https://aulth.github.io/bijlivibhag/',
        github: 'https://github.com/aulth/bijlivibhag',
        website: 'https://aulth.github.io/bijlivibhag/',
        logo:'https://i.ibb.co/F5K5WQ9/icon-min.png',
        title: 'Bijli Vibhag',
    }
    const technology = { html: true, css: true, github:true}
    return (
        <>
            <Head>
                <title>Bijli Vibhag</title>
                <meta name="description" content="Study material platform for 3rd sem Electrical Engineering students (specially for JMI)" />
                <meta property="og:image" content="/projects/bijlivibhag.jpg" />
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
export default BijliVibhag