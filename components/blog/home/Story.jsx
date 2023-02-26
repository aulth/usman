import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Link from 'next/link';
const Story = ({ data }) => {
    const [story, setStory] = useState();
    useEffect(() => {
        setStory(data.filter(item => item.category == 'story'));
    }, [])
    const getFormattedDate = (str) => {
        const dateString = str;
        const date = new Date(dateString);
        const month = date.toLocaleString("default", { month: "long" });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    return (
        <div className="w-full rounded-lg p-4">
            <div className="w-full flex justify-between">
                <h2 className="font-bold">Story</h2>
                <Link href={'/blog/category/story'} className="flex items-center text-cyan-500">View all <IoIosArrowRoundForward className='mt-1' /></Link>
            </div>
            {
                story && story.length > 0 &&
                <div className="w-full flex gap-4 flex-col xl:flex-row mt-4">
                    <div className='rounded-lg h-[19rem] w-full xl:w-[45%] border border-gray-200 relative flex items-end'>
                        <img src="https://source.unsplash.com/random/?book/" className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                        <div className="w-full rounded-lg h-[19rem]  absolute top-0 bg-gradient-to-tr from-cyan-400 to-transparent"></div>
                        <div className="w-full p-4 z-10 text-white">
                            <Link href={`/blog/category/${story[0].category}`} className="text-sm">{story[0].category[0].toUpperCase() + story[0].category.slice(1).toLowerCase()}</Link>
                            <Link href={`/blog/article/${story[0].link}`} ><h2 className="font-bold text-xl">{story[0].title.slice(0, 100)}{story[0].title.length > 100 ? ".." : ""}</h2></Link>
                            <span className='text-sm'>{getFormattedDate(story[0].date)}</span>
                        </div>
                    </div>
                    <div className='rounded-lg h-[19rem] w-full xl:w-[55%]  relative flex flex-col gap-4 '>
                        {
                            story.map((story, index) => {
                                if (index == 0 || index >= 5) {
                                    return;
                                }
                                return <div key={index} className="w-full h-16 flex gap-2 justify-start">
                                    <div className='w-24 rounded shrink-0'>
                                        <img src={story.cover} className='w-full h-full object-cover rounded-lg' alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <Link href={`/blog/article/${story.link}`} className="font-semibold h-16 overflow-hidden leading-5">{story.title}</Link>
                                        <span className='text-sm'>{getFormattedDate(story.date)}</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Story