import Navbar from 'components/blog/Navbar'
import React from 'react'
import Article from 'components/blog/article/Article'
import Footer from 'components/blog/Footer'
import data from 'public/data'
const ArticlePage = ({data}) => {
  return (
    <>
    <Navbar/>
    {
      data && data.length>0 &&
      <Article data={data}/>
    }
    {
      data && data.length<=0 &&
      <div className='container m-auto md:px-12 px-4 py-4'>
        This article is not available
      </div>
    }
    <Footer/>
    </>
  )
}

export default ArticlePage
export async function getServerSideProps(context) {
  const {slug} = context.params
  const articleData = data.filter(article=>article.link==slug);
  return {
    props: {
      data:articleData
    }, // will be passed to the page component as props
  }
}