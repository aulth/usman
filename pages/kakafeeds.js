import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Kakafeeds = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/kakafeeds.png',
        description: 'Single Product website for KakaFeeds.com ',
        demo: 'https://kaka.vercel.app',
        github: '',
        website: 'https://www.kakafeeds.com',
        logo:'/logo/kakafeeds.png',
        title: 'KakaFeeds',
        created:'29-06-2022',
        updated:'11-07-2022'
    }
    const technology = { html: true, css: true, js: true,  reactjs: true, nextjs: true,  tailwind: true, vercel: true, animxyz:true }
    return (
        <>
            <Head>
                <title>Kakafeeds</title>
                <meta name="description" content="Single Product Website for Kakafeeds.com" />
                <meta property="og:image" content="/projects/kakafeeds.png" />
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
export default Kakafeeds