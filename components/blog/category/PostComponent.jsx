import Link from 'next/link'
import React from 'react'

const PostComponent = ({data}) => {
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    return (
        <div className="w-full flex flex-col md:flex-row sm:flex-row gap-2 justify-start md:h-44 h-auto  mt-2">
            <div className="w-full md:w-60 sm:w-60 shrink-0 h-44 relative">
                <button className="px-1.5 py-0.5 rounded-lg top-2 left-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 absolute text-white">
                    {data.category[0].toUpperCase()+data.category.slice(1).toLowerCase()}
                </button>
                <img src={data?.cover} className='w-full h-44 rounded-lg object-cover' alt="" />
            </div>
            <div className="w-full">
                <Link href={`/blog/article/${data.link}`} className="font-bold text-xl hover:text-cyan-500">{data?.title.slice(0,85)}{data?.title.length>85?"..":""}</Link>
                <p>
                {data.content.slice(0, 100).replace(/<[^>]+>/g, '')}
                </p>
                <span className='text-sm text-gray-600'>{getFormattedDate(data?.createdAt)}</span>
            </div>
        </div>
    )
}

export default PostComponent