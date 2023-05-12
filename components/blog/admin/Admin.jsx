import React, { useEffect, useState } from 'react'
import AdminPostItem from './AdminPostItem'
import { RiLockPasswordLine } from 'react-icons/ri'
import toast, { Toaster } from 'react-hot-toast';

const Admin = ({ data }) => {
    const [authorized, setAuthorized] = useState(false)
    const [articleData, setArticleData] = useState(data);
    const verifyAdmin = (e) => {
        e.preventDefault();
        if (document.getElementById('pin').value == process.env.NEXT_PUBLIC_ADMIN_PIN) {
            toast.success("Verified");
            localStorage.setItem('usmanBlogPass', process.env.NEXT_PUBLIC_ADMIN_PIN);
            setAuthorized(true)
        } else {
            toast.error("You are not authorised");
            return;
        }
    }
    useEffect(() => {
        if (typeof window !== undefined) {
            const adminPass = localStorage.getItem('usmanBlogPass');
            if (adminPass == process.env.NEXT_PUBLIC_ADMIN_PIN) {
                setAuthorized(true)
            }
        }
    }, [])
    const fetchAll = async () => {
        const response = await fetch('/api/blog/securefetch', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ adminPin: process.env.NEXT_PUBLIC_ADMIN_PIN })
        })
        var data = await response.json();
        if (data.success) {
            setArticleData(data.article)
        } else {
            data = "";
        }
    }
    return (
        <>
            <Toaster position='top-right' />
            <div className="container m-auto px-4 py-4 md:px-12  relative">
                {
                    !authorized &&
                    <form onSubmit={verifyAdmin} className="m-auto w-full md:w-80 flex flex-col gap-4 p-4">
                        <h2 className="font-semibold text-center">Admin Password</h2>
                        <input type="text" placeholder='Pin' id='pin' className='w-full p-1 focus:border-cyan-400 focus:outline-none border-b border-gray-200' required />
                        <button type="submit" className='w-full px-2 py-1 bg-gradient-to-tr from-cyan-400 to-blue-400 text-white'>Verify</button>
                    </form>
                }
                {
                    authorized &&
                    <div className='flex   flex-col   gap-4'>
                        {
                            articleData && articleData.length > 0 &&
                            articleData.map((article, index) => {
                                return <AdminPostItem fetchAll={fetchAll} data={article} key={index} />
                            })
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default Admin