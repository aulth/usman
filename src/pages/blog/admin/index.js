import React from 'react'
import Navbar from 'components/blog/Navbar'
import Admin from 'components/blog/admin/Admin'
import Head from 'next/head'
const Index = ({ data }) => {
  return (
    <>
      <Navbar />
      {
        data &&
        <>
          <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>Blog - Admin</title>
            <meta name="title" content="Blog - Admin" />
            <meta name="description" content="" />
          </Head>
          <Admin data={data} />
        </>
      }
      {
        !data &&
        <div className="m-auto p-4">
          <h2 className="text-center">
            No Article Found
          </h2>
        </div>
      }
    </>
  )
}

export default Index
export async function getServerSideProps(context) {
  const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/securefetch' : 'http://localhost:3000/api/blog/securefetch', {
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({adminPin:process.env.NEXT_PUBLIC_ADMIN_PIN})
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