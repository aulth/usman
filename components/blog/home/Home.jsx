import React from 'react'
import Popular from './Popular'
import Story from './Story'
import Subscribe from './Subscribe'
import Thoughts from './Thoughts'
import Tips from './Tips'
const Home = ({data}) => {
    return (
        <div className="container m-auto flex gap-4 flex-col xl:flex-row xl:px-16 px-4">
            <div className="w-full flex flex-col gap-4 xl:w-[60%]">
                <div className="w-full rounded-lg bg-white ">
                    <Story data={data} />
                </div>
                <div className="w-full rounded-lg bg-white ">
                    <Thoughts data={data} />
                </div>
                <div className="w-full rounded-lg bg-white ">
                    <Tips  data={data} />
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 xl:w-[40%] pb-4">
                <div className="w-full rounded-lg bg-white">
                    <Popular  data={data} />
                </div>
                <div className="w-full rounded-lg bg-white">
                    <Subscribe />
                </div>
            </div>
        </div>
    )
}

export default Home