import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const EmailSpemmer = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/email-spemmer.png',
        description: 'Best anonymous email spammer, supports html emails too',
        demo: 'https://email-spemmer.vercel.app/',
        github: 'https://github.com/aulth/email-spemmer',
        website: 'https://email-spemmer.vercel.app/',
        logo:'https://email-spemmer.vercel.app/favicon.ico',
        title: 'Email Spemmer',
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, heroku:true, vercel:true, github:true}
    return (
        <>
            <Head>
                <title>Email Spemmer</title>
                <meta name="description" content="Best anonymous email spammer, supports html emails too" />
                <meta property="og:image" content="/projects/email-spemmer.png" />
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
export default EmailSpemmer