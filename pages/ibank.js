import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const IBank = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/ibank.png',
        description: 'A banking system which allows to transfer money from one account to another instantly.',
        demo: 'https://ibank.vercel.app/',
        github: 'https://github.com/aulth/ibank',
        website: 'https://ibank.vercel.app/',
        logo:'/logo/ibank.png',
        title: 'IBank',
        created:'13/09/22',
        updated:'16/09/22'
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, nextjs:true, mongodb:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>iBank</title>
                <meta name="description" content="A banking system which allows to transfer money from one account to another instantly." />
                <meta property="og:image" content="/projects/ibank.png" />
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
export default IBank