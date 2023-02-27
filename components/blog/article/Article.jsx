import React from 'react'
import Body from './Body'
import Popular from '../home/Popular'
import Subscribe from '../home/Subscribe'
import YouMightLike from './YouMightLike'
import Comment from './Comment'
import PostComment from './PostComment'
const Article = ({data}) => {
    return (
        <div className="container m-auto flex gap-4 flex-col xl:flex-row xl:px-16 px-4 py-4">
            <div className="w-full flex flex-col gap-4 xl:w-[60%]">
                <div className="w-full rounded-lg bg-white ">
                    <Body data={data} />
                </div>
                <div className="w-full rounded-lg bg-white ">
                    <YouMightLike category={data.category}/>
                </div>
                <div className="w-full rounded-lg bg-white ">
                    <Comment/>
                </div>
                <div className="w-full rounded-lg bg-white ">
                    <PostComment/>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 xl:w-[40%]">
                <div className="w-full rounded-lg bg-white">
                    <Popular />
                </div>
                <div className="w-full rounded-lg bg-white">
                    <Subscribe />
                </div>
            </div>
        </div>
    )
}

export default Article