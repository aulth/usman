import Navbar from 'components/blog/Navbar'
import React from 'react'
import Article from 'components/blog/article/Article'
import Footer from 'components/blog/Footer'
import data from 'public/data'
import Head from 'next/head'
const ArticlePage = ({ data }) => {
  return (
    <>
      <Navbar />

      {
        data && data.live &&
        <>
          <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>{data.title}</title>
            <meta name="title" content={data.title} />
            <meta name="description" content={data.content.slice(0,150).replace(/<[^>]+>/g, '')} />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://mohd-usman.vercel.app/" />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.content.slice(0,150).replace(/<[^>]+>/g, '')} />
            <meta property="og:image" content={data.cover} />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`https://mohd-usman.vercel.app/blog/article/${data.link}`} />
            <meta property="twitter:title" content={data.title} />
            <meta property="twitter:description" content={data.content.slice(0,150).replace(/<[^>]+>/g, '')} />
            <meta property="twitter:image" content={data.cover} />
          </Head>
          <Article data={data} />
        </>
      }
      {
        !data &&
        <div className='container m-auto md:px-12 px-4 py-4'>
          This article is not available
        </div>
      }
      {
        data && !data.live &&
        <div className='container m-auto md:px-12 px-4 py-4'>
          This article has been made private
        </div>
      }
      <Footer />
    </>
  )
}

export default ArticlePage
export async function getServerSideProps(context) {
  const { slug } = context.params
  const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/fetchone' : 'http://localhost:3000/api/blog/fetchone', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ link: slug })
  })
  var data = await response.json();
  if (data.success) {
    data = data.article;
    const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/incrviews' : 'http://localhost:3000/api/blog/incrviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ link: slug })
    })
  } else {
    data = "";
  }
  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}