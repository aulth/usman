import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const DigitalClock = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/digital-clock.jpg',
        description: 'This is a digital clock which can be used to display the time.',
        demo: 'https://aulth.github.io/digital-clock/',
        github: 'https://github.com/aulth/sai-buzurg',
        website: 'https://aulth.github.io/digital-clock/',
        logo:'https://i.ibb.co/txTvZGP/clock.jpg',
        title: 'Digital Clock',
    }
    const technology = { html: true, css: true, js:true}
    return (
        <>
            <Head>
                <title>Digital Clock</title>
                <meta name="description" content="This is a digital clock which can be used to display the time." />
                <meta property="og:image" content="/projects/digital-clock.jpg" />
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
export default DigitalClock