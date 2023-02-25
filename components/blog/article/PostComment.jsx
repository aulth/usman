import React from 'react'

const PostComment = () => {
    return (
        <>
            <h3 className="font-semibold">Share your remarks</h3>
            <form className='mt-2 flex flex-col gap-4'>
                <div className="w-full relative">
                    <label className="text-[10px] bg-white px-1 absolute -top-2 left-1 text-gray-500">Name</label>
                    <input type="text" placeholder='Enter your name' className='w-full p-1 border rounded border-gray-200  focus:outline focus:outline-cyan-400' />
                </div>
                <div className="w-full relative">
                    <label className="text-[10px] bg-white px-1 absolute -top-2 left-1 text-gray-500">Remark</label>
                    <textarea name="" id="" placeholder='Type your thought..' className='w-full border border-gray-200 p-1 rounded focus:outline focus:outline-cyan-400'></textarea>
                </div>
                <button type="submit" className='px-2 py-1 bg-gradient-to-tr from-gray-800 -mt-2 to-gray-500 text-white'>Post</button>
            </form>
        </>
    )
}

export default PostComment