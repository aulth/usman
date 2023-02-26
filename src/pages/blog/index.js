import React from 'react'
import Navbar from 'components/blog/Navbar'
import Recent from 'components/blog/home/Recent'
import Home from 'components/blog/home/Home'
import Footer from 'components/blog/Footer'
import Head from 'next/head'
const Blog = ({data}) => {

  return (
    <>
    <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>Mohd Usman - Blog</title>
            <meta name="title" content="Mohd Usman - Blog" />
            <meta name="description" content="" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://mohd-usman.vercel.app/blog" />
            <meta property="og:title" content="Mohd Usman - Blog" />
            <meta property="og:description" content="" />
            <meta property="og:image" content="" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`https://mohd-usman.vercel.app/blog`} />
            <meta property="twitter:title" content="Mohd Usman - Blog" />
            <meta property="twitter:description" content="" />
            <meta property="twitter:image" content="" />
          </Head>
    <Navbar/>
    <Recent data={data}/>
    <Home data={data}/>
    <Footer/>
    </>
  )
}

export default Blog
export async function getServerSideProps(context) {
  const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/fetchall' : 'http://localhost:3000/api/blog/fetchall')
  var data = await response.json();
  console.log(data)
  if (data.success) {
    data = data.article;
  } else {
    data = "";
  }
  console.log(data);
  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}