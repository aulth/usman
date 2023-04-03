import Link from 'next/link'
import React, { useEffect } from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast';
import { RiPencilFill } from 'react-icons/ri'
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
            getViewer(data.link);
        }
    }, [data])
    const shareData = {
        title: data.title,
        text: data.content.slice(0, 150).replace(/<[^>]+>/g, '') + "..",
        url: `https://mohd-usman.vercel.app/blog/article/${data.link}`
    }
    const sharePost = async () => {
        try {
            if (!navigator.canShare) {
                output.textContent = `Your browser doesn't support the Web Share API.`
                return
            }
            await navigator.share(shareData);
        } catch (err) {
            toast.error(err)
        }
    }
    const getViewer = async (link) => {
        // Get device information
        console.log('getViewer')
        const deviceInfo = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            vendor: navigator.vendor,
            language: navigator.language
        };

        // Get carrier name (if available)
        let carrierName = null;
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection && connection.type === 'cellular') {
            carrierName = connection.effectiveType;
        }
        const data = {
            deviceInfo,
            carrierName,
        }
        const response = await fetch('/api/blog/getviewer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ data: data, link: link })
        });
        const json = await response.json();
    }
    return (
        <>
            <Toaster position='top-right' />
            <div className="w-full rounded-lg p-4">
                <nav className="text-sm text-cyan-500">
                    <ol className='list-none p-0 inline-flex gap-1'>
                        <li class="flex gap-1 items-center">
                            <Link href={'/blog'} className='hover:text-cyan-600 hover:underline'>Home</Link>
                            &gt;
                        </li>
                        <li class="flex items-center">
                            <Link href={`/blog/category/${data.category}`} className='hover:text-cyan-600 hover:underline'>{data.category[0].toUpperCase() + data.category.slice(1).toLowerCase()}</Link>
                        </li>
                    </ol>
                </nav>
                <h1 className="font-bold text-2xl mt-2 capitalize">{data.title}</h1>
                <div className="w-full flex justify-between items-center text-sm mt-2">
                    <time class="text-gray-500 text-sm"><span class="mr-1">Published:</span> {getFormattedDate(data.createdAt)}</time>
                    <button onClick={sharePost} className='hover:text-cyan-500'><AiOutlineShareAlt /></button>
                </div>
                <main className='mt-4 body article-body clear-none'>
                </main>
            </div>
        </>
    )
}

export default Body