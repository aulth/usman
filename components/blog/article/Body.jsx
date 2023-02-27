import Link from 'next/link'
import React, { useEffect } from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast';

const Body = ({ data }) => {
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    useEffect(() => {
        if (typeof window != undefined) {
            document.querySelector('.body').innerHTML = data.content;
        }
    }, [])
    const shareData = {
        title: data.title,
        text: data.content.slice(0, 150).replace(/<[^>]+>/g, '')+"..",
        url: `https://mohd-usman.vercel.app/blog/article/${data.link}`
    }
    const sharePost = async () => {
        try {
            await navigator.share(shareData);
        } catch (err) {
            toast.error(err)
        }
    }
    return (
        <>
        <Toaster position='top-right'/>
        <div className="w-full rounded-lg p-4">
            <h3 className="text-sm text-cyan-500"><Link href={'/blog'} className='hover:text-cyan-600 hover:underline'>Home</Link> &gt; <Link href={`/blog/category/${data.category}`} className='hover:text-cyan-600 hover:underline'>{data.category[0].toUpperCase() + data.category.slice(1).toLowerCase()}</Link></h3>
            <h1 className="font-bold text-2xl mt-2">{data.title}</h1>
            <div className="w-full flex justify-between items-center text-sm mt-2">
                <span>{getFormattedDate(data.createdAt)}</span>
                <button onClick={sharePost} className='hover:text-cyan-500'><AiOutlineShareAlt /></button>
            </div>
            <div className='mt-4 body article-body clear-none'>
            </div>
        </div>
        </>
    )
}

export default Body