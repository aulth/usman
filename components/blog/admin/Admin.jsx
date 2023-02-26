import React, { useEffect, useState } from 'react'
import AdminPostItem from './AdminPostItem'
import { RiLockPasswordLine } from 'react-icons/ri'
import toast, { Toaster } from 'react-hot-toast';

const Admin = () => {
    const [authorized, setAuthorized] = useState(false)
    const verifyAdmin = (e) => {
        e.preventDefault();
        if (document.getElementById('pin').value == process.env.NEXT_PUBLIC_ADMIN_PIN) {
            toast.success("Verified");
            setAuthorized(true)
        } else {
            toast.error("You are not authorised");
            return;
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
                    <div className="w-full flex flex-col gap-4 bg-white rounded-lg p-4">
                        <AdminPostItem />
                        <AdminPostItem />
                        <AdminPostItem />
                        <AdminPostItem />
                        <AdminPostItem />
                    </div>
                }
            </div>
        </>
    )
}

export default Admin