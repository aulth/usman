import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Add2Cart = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/add2cart.png',
        description: 'An online e commerce platform that allows users to add items to their cart and checkout.',
        demo: 'https://add2cart.vercel.app/login',
        github: 'https://github.com/aulth/add2cart',
        website: 'https://add2cart.vercel.app/',
        logo:'/logo/add2cart.png',
        title: 'Add2Cart',
        created:'12/05/22',
        updated:'22/05/22'
    }
    const technology = { html: true, css: true, js: true, nodejs: true, reactjs: true, nextjs: true, mongodb: true, tailwind: true, vercel: true, github: true }
    return (
        <>
            <Head>
                <title>Add2Cart</title>
                <meta name="description" content="An online e commerce platform that allows users to add items to their cart and checkout" />
                <meta property="og:image" content="/projects/add2cart.png" />
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
export default Add2Cart