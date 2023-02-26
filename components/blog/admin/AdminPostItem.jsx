import React, { useEffect } from 'react'
import { CiEdit, CiNoWaitingSign } from 'react-icons/ci'
import { BiCheck } from 'react-icons/bi'
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai'
import Link from 'next/link'
const AdminPostItem = ({ data }) => {
    const deleteArticle = async (id) => {
        const response = await fetch('/api/blog/delete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        });
        const json = await response.json();
        if (json.success) {
            toast.success(json.msg);
        } else {
            toast.error(json.msg);
        }
    }
    return (
        <>
            <Toaster position='top-right' />
            <div className="w-full  bg-white rounded-lg p-4 relative">
                <div className="w-full flex md:flex-row flex-col gap-2 justify-start">
                    <div className="flex items-center bg-white px-2 py-1 absolute rounded-lg bottom-0 right-0">
                        <a target="_blank" href={`/blog/admin/edit/${data.link}`} className='bg-gradient-to-tr  px-1.5 py-1 rounded-sm '><CiEdit /></a>
                        <button onClick={() => { deleteArticle(data._id) }} className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm '><AiOutlineDelete /></button>
                        <button className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm '><AiOutlineEye /><span className='text-[12px]'>{data.views}</span></button>
                    </div>
                    <div className="md:w-48 w-full  md:h-32 h-48 shrink-0 relative">
                        <button className={`absolute top-2 left-2 bg-gradient-to-tr p-1 ${data.live ? 'bg-green-400' : 'bg-orange-400'} rounded-sm text-sm text-white`}>{data.live ? <BiCheck /> : <CiNoWaitingSign />}</button>
                        <img src={data.cover} className='w-full h-full rounded-lg object-cover' alt="" />
                    </div>
                    <div className="w-full flex flex-col justify-start">
                        <a href={`/blog/article/${data.link}`} target="_blank"><h2 className="font-bold text-lg md:max-h-16 overflow-hidden leading-8">{data.title.slice(0, 138)}{data.title.length > 138 ? ".." : ""}</h2></a>
                        <p className='max-h-20 overflow-hidden leading-7 description' >
                            {data.content.replace(/<[^>]+>/g, '')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPostItem