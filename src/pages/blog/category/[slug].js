import Category from 'components/blog/category/Category'
import Navbar from 'components/blog/Navbar'
import React from 'react'
import Head from 'next/head'
const CategoryPage = ({ data }) => {
  return (
    <>
      <Navbar />
      {
        data && data.length > 0 &&
        <>
          <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>{data[0].category[0].toUpperCase()}{data[0].category.slice(1).toLowerCase()}</title>
            <meta name="title" content={data[0].category[0].toUpperCase()+data[0].category.slice(1).toLowerCase()} />
            <meta name="description" content="" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://mohd-usman.vercel.app/blog/category/${data[0].category}`} />
            <meta property="og:title" content={data[0].category[0].toUpperCase()+data[0].category.slice(1).toLowerCase()} />
            <meta property="og:description" content="" />
            <meta property="og:image" content="" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`https://mohd-usman.vercel.app/blog/category/${data[0].category}`} />
            <meta property="twitter:title" content={data[0].category[0].toUpperCase()+data[0].category.slice(1).toLowerCase()} />
            <meta property="twitter:description" content="" />
            <meta property="twitter:image" content="" />
          </Head>
          <Category data={data} />
        </>
      }
      {
        data && data.length <= 0 &&
        <div className="m-auto p-4">
          <h2 className="text-center">
            No Article Found
          </h2>
        </div>
      }
    </>
  )
}

export default CategoryPage
export async function getServerSideProps(context) {
  const { slug } = context.params
  const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/fetchcategory' : 'http://localhost:3000/api/blog/fetchcategory', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ category: slug })
  })
  var data = await response.json();
  if (data.success) {
    data = data.article;
  } else {
    data = "";
  }
  return {
    props: {
      data: data
    }, // will be passed to the page component as props
  }
}