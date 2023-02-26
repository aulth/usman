import Navbar from 'components/blog/Navbar'
import React from 'react'
import Edit from './../../../../../components/blog/admin/Edit'
import Head from 'next/head'
const EditPage = ({ data }) => {
    return (
        <>
            <Navbar />
            {
                data &&
                <>
                    <Head>
                        <title>{data.title}</title>
                        <meta name="title" content={data.title} />
                        <meta name="description" content="" />
                    </Head>
                    <Edit article={data} />
                </>
            }
            {
                !data &&
                <div className="m-auto p-4">
                    <h2 className="text-center">
                        This Article is Not Available
                    </h2>
                </div>
            }
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