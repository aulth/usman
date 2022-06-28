import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Quran = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/quran.png',
        description: 'Zuz wise complete quran',
        demo: 'https://full-quran.vercel.app/',
        github: 'https://github.com/aulth/quran',
        website: 'https://full-quran.vercel.app/',
        logo:'/logo/quran.png',
        title: 'Full Quran',
        created:'02/03/22',
        updated:'No update'
    }
    const technology = { html: true, css: true, js:true, reactjs:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>Quran</title>
                <meta name="description" content="Zuz wise complete quran" />
                <meta property="og:image" content="/projects/quran.png" />
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
export default Quran