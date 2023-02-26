import React from 'react'
import Navbar from 'components/blog/Navbar'
import Publish from 'components/blog/publish/Publish'
import Head from 'next/head'
const Index = () => {
  return (
    <>
      <Head>
        <title>Publish New Article</title>
        <meta name="title" content="Publish New Article" />
        <meta name="description" content="" />
      </Head>
      <Navbar />
      <Publish />
    </>
  )
}

export default Index