import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const TextMonkey = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/textmonkey.png',
        description: 'Text Utilizer : Count paragraphs, words, transform texts into upper case, lower case, title case and remove extra spaces.',
        demo: 'https://aulth.github.io/textmonkey/',
        github: 'https://github.com/aulth/textmonkey',
        website: 'https://aulth.github.io/textmonkey/',
        logo:'/logo/textmonkey.png',
        title: 'TextMonkey',
        created:'29/12/21',
        updated:'No update'
    }
    const technology = { html: true, css: true, js:true, bootstrap:true, reactjs:true}
    return (
        <>
            <Head>
                <title>Text Monkey</title>
                <meta name="description" content="Text utilizer : Transform texts into upper case , lower case, title case and remove extra spaces also count number of words and paragraphs." />
                <meta property="og:image" content="/projects/textmonkey.png" />
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
export default TextMonkey