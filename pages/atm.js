import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const Atm = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/atm.png',
        description: 'Simple ATM machine game.',
        demo: 'https://aulth.github.io/atm/',
        github: 'https://github.com/aulth/atm',
        website: 'https://aulth.github.io/atm/',
        logo:'https://aulth.github.io/atm/icon.png',
        title: 'ATM',
        created:'11/04/22',
        updated:'20/06/22'
    }
    const technology = { html: true, css: true, js: true, reactjs:true, github: true }
    return (
        <>
            <Head>
                <title>Atm</title>
                <meta name="description" content="Simple ATM machine game." />
                <meta property="og:image" content="/projects/atm.png" />
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
export default Atm