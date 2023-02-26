import React from 'react'
import PostComponent from './PostComponent'

const Posts = ({ data }) => {
    return (
        <div className="w-full rounded-lg p-4 ">
            {
                data && data.length > 0 &&
                <h2 className="font-bold">{data[0].category[0].toUpperCase() + data[0].category.slice(1).toLowerCase()}</h2>
            }
            <div className="flex flex-col gap-2">
                {
                    data && data.length > 0 &&
                    data.map((post, index) => {
                        return <PostComponent key={index} data={post} />
                    })
                }
            </div>

        </div>
    )
}

// <div className="w-full shrink-0 md:w-60 md:h-48">
// <img src="https://source.unsplash.com/random/?story/" alt="" />
// </div>
export default Posts