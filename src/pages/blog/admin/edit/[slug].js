import Navbar from 'components/blog/Navbar'
import React from 'react'
import Edit from './../../../../../components/blog/admin/Edit'
const EditPage = ({ data }) => {
    return (
        <>
        <Navbar/>
        <Edit article={data} />
        </>
    )
}

export default EditPage
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
    data = data.article;
    console.log(data);
    return {
        props: {
            data: data
        }, // will be passed to the page component as props
    }
}