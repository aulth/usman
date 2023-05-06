import Category from 'components/blog/category/Category'
import Navbar from 'components/blog/Navbar'
import React from 'react'
import Head from 'next/head'
import Footer from 'components/blog/Footer'
const CategoryPage = ({ data, category }) => {

  const descData = {'story':'Discover captivating tales from various genres on our story category blog page. Get ready to be transported to different worlds and be swept away by the power of storytelling.',
'tips':'Get practical advice for every aspect of your life with our tips category. From health to finance, browse our collection and achieve your goals.',
'thoughts':'Gain unique insights from Mohd Usman as he shares his personal thoughts and opinions on our thought category page',
'technology':'Discover the future of technology on our technology category page. Explore a wide range of topics including artificial intelligence, cybersecurity, and more, and stay informed with our expert analysis and in-depth coverage.'
  }
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{category.charAt(0).toUpperCase() + category.slice(1)}</title>
        <meta name="title" content={category.charAt(0).toUpperCase() + category.slice(1)} />
        <meta name="description" content={descData[category]?descData[category]:'Description not available for this category.'} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://mohd-usman.vercel.app/blog/category/${category.toLowerCase()}`} />
        <meta property="og:title" content={category.charAt(0).toUpperCase() + category.slice(1)} />
        <meta property="og:description" content={descData[category]?descData[category]:'Description not available for this category.'} />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://mohd-usman.vercel.app/blog/category/${category.toLowerCase()}`} />
        <meta property="twitter:title" content={category.charAt(0).toUpperCase() + category.slice(1)} />
        <meta property="twitter:description" content={descData[category]?descData[category]:'Description not available for this category.'} />
        <meta property="twitter:image" content="" />
      </Head>
      <Navbar />
      {
        data && data.length > 0 &&
        <>
          <Category data={data} />
        </>
      }
      {
        data && data.length <= 0 &&
        <div className="m-auto p-4">
          <h2 className="text-center">
            No Article Found in <b>{category[0].toUpperCase()}{category.slice(1).toLowerCase()}</b> category
          </h2>
        </div>
      }
      <Footer />
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
  console.log(slug)
  return {
    props: {
      data: data,
      category: slug
    }, // will be passed to the page component as props
  }
}