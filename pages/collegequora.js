import React from 'react'
import ProjectPage from '../components/ProjectPage'
import Head from 'next/head'
const CollegeQuora = (props) => {
    const data = {
        link: props.link,
        screenshot: '/projects/collegequora.png',
        description: 'Online student forum where student will post their querie and will recieve relevant answers from respective teachers or students.',
        demo: 'https://collegequora.herokuapp.com/',
        github: 'https://github.com/aulth/quora-for-college',
        website: 'https://collegequora.herokuapp.com/',
        logo:'/images/collegequora.ico',
        title: 'College Quora',
        created:'11/03/22',
        updated:'09/06/22'
    }
    const technology = { html: true, css: true, js:true, reactjs:true, nodejs:true, heroku:true, mysql:true}
    return (
        <>
            <Head>
                <title>College Quora</title>
                <meta name="description" content="Online student forum where student will post their querie and will recieve relevant answers from respective teachers or students." />
                <meta property="og:image" content="/projects/collegequora.png" />
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
export default CollegeQuora