import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const WeatherMonkey = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/weather-monkey.png',
        description: 'Get weather information with your city map',
        demo: 'https://weather-monkey.vercel.app/',
        github: 'https://github.com/aulth/weather-monkey',
        website: 'https://weather-monkey.vercel.app/',
        logo:'/logo/weathermonkey.png',
        title: 'Weather Monkey',
        created:'22/03/22',
        updated:'23/03/22'
    }
    const technology = { html: true, css: true, js:true, reactjs:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>Weather Monkey</title>
                <meta name="description" content="Get weather information with your city map" />
                <meta property="og:image" content="/projects/weather-monkey.png" />

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
export default WeatherMonkey