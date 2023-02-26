import Category from 'components/blog/category/Category'
import Navbar from 'components/blog/Navbar'
import React from 'react'
import data from 'public/data'
const CategoryPage = ({data}) => {
  return (
    <>
    <Navbar/>
    <Category data={data}/>
    </>
  )
}

export default CategoryPage
export async function getServerSideProps(context) {
    const {slug} = context.params
    const categoryPosts = data.filter(article=>article.category==slug);
    return {
      props: {
        data:categoryPosts
      }, // will be passed to the page component as props
    }
  }