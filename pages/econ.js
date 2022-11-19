import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Econ = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/econ.png',
        description: 'Conceal your email address while sending the mail',
        demo: 'https://e-con.vercel.app/',
        github: 'https://github.com/aulth/econ',
        website: 'https://e-con.vercel.app/',
        logo:'/logo/econ.png',
        title: 'econ',
        created:'13/11/22',
        updated:'15/11/22'
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, nextjs:true, mongodb:true, vercel:true, github:true, tailwind:true}
    return (
        <>
            <Head>
                <title>ECON</title>
                <meta name="description" content="Email concealer - It protects your identity" />
                <meta property="og:image" content="/projects/econ.png" />
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
export default Econ