import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Myspace = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/myspace.png',
        description: 'Find a perfect flat.',
        demo: 'https://myspacebook.vercel.app/',
        github: 'https://github.com/aulth/myspace',
        website: 'https://myspacebook.vercel.app/',
        logo:'/logo/myspace.png',
        title: 'mySpace',
        created:'14/08/22',
        updated:'04/09/22'
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, nextjs:true, mongodb:true, vercel:true, github:true, tailwind:true}
    return (
        <>
            <Head>
                <title>mySpace</title>
                <meta name="description" content="Perfect flat finder" />
                <meta property="og:image" content="/projects/myspace.png" />
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
export default Myspace