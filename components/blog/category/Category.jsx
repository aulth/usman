import React, {useState, useEffect} from 'react'
import Popular from '../home/Popular'
import Subscribe from '../home/Subscribe'
import Posts from './Posts'
const Category = ({data}) => {
    return (
        <div className="container m-auto flex gap-4 flex-col xl:flex-row xl:px-16 px-4 py-4">
            <div className="w-full flex flex-col gap-4 xl:w-[60%]">
                <div className="w-full rounded-lg bg-white ">
                    <Posts data={data} />
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

export default Category