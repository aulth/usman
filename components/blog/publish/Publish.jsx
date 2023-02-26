import React from 'react'
import { AiOutlineSave } from 'react-icons/ai'
import { IoIosSend } from 'react-icons/io'
const Publish = () => {
    return (
        <div className="container m-auto px-4 py-4 md:px-12  ">
            <div className="w-full bg-white rounded-lg p-4">
                <div className="w-full flex justify-between">
                    <h2 className="font-bold text-xl">Compose your article</h2>
                    <div className="flex gap-2 items-center text-lg">
                        <button className=' hover:text-cyan-500'><AiOutlineSave /></button>
                        <button className='text-xl hover:text-cyan-500'><IoIosSend /></button>
                    </div>
                </div>
                <div className="flex items-center ">
                    <input type="text" placeholder='Title...' className='p-2 border-b border-gray-200 w-full text-lg font-semibold focus:border-cyan-400 focus:outline-none' />
                </div>
                <div className="flex items-center ">
                    <select name="category" id="" className='w-full p-2 focus:outline-none focus:border-cyan-400 border-b border-gray-200'>
                        <option value="">Select Category</option>
                        <option value="Story">Story</option>
                        <option value="Tips">Tips</option>
                        <option value="Thoughts">Thoughts</option>
                    </select>
                </div>
                <div className="w-full mt-2">
                    <textarea name="" id="" className='w-full p-2 focus:outline-none focus:border-cyan-400 border-b border-gray-200'></textarea>
                </div>
            </div>
        </div>
    )
}

export default Publish