import React from 'react'
import Navbar from 'components/blog/Navbar'
import Recent from 'components/blog/home/Recent'
import Home from 'components/blog/home/Home'
import Footer from 'components/blog/Footer'
const Blog = () => {

  return (
    <>
    <Navbar/>
    <Recent/>
    <Home/>
    <Footer/>
    </>
  )
}

export default Blog