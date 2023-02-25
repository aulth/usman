import React from 'react'
import Navbar from 'components/blog/Navbar'
import Recent from 'components/blog/home/Recent'
import Home from 'components/blog/home/Home'
import Footer from 'components/blog/Footer'
import data from 'public/data'
const Blog = () => {

  return (
    <>
    <Navbar/>
    <Recent data={data}/>
    <Home data={data}/>
    <Footer/>
    </>
  )
}

export default Blog