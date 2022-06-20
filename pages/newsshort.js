import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Newsshort = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/newsshort.png',
        description: 'Summarized news from inshorts.com',
        demo: 'https://newsshort.vercel.app/',
        github: 'https://github.com/aulth/news-short',
        website: 'https://newsshort.vercel.app/',
        logo:'https://newsshort.vercel.app/logo192.png',
        title: 'NewsShort',
    }
    const technology = { html: true, css: true, js:true, reactjs:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>News Short</title>
                <meta name="description" content="Online student forum where student will post their querie and will recieve relevant answers from respective teachers or students." />
                <meta property="og:image" content="/projects/newsshort.png" />
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
export default Newsshort