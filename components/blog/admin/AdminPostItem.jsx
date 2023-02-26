import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { BiCheck } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai'
const AdminPostItem = () => {
    return (
        <div className="w-full flex gap-2 justify-start relative">
            <div className="flex items-center bg-white px-2 py-1 absolute bottom-0 right-0">
                <button className='bg-gradient-to-tr  px-1.5 py-1 rounded-sm '><CiEdit /></button>
                <button className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm '><AiOutlineDelete /></button>
                <button className='bg-gradient-to-tr flex gap-1 items-center  px-1.5 py-1 rounded-sm '><AiOutlineEye /><span className='text-[12px]'>200</span></button>
            </div>
            <div className="w-48  h-32 shrink-0 relative">
                <button className='absolute top-2 left-2 bg-gradient-to-tr p-1 bg-green-400 rounded-sm text-sm text-white'><BiCheck /></button>
                <img src="https://source.unsplash.com/random/?yoga/" className='w-full h-full rounded-lg object-cover' alt="" />
            </div>
            <div className="w-full flex flex-col justify-start">
                <h2 className="font-bold text-lg h-16 overflow-hidden leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum enim dicta recusandae velit quidem dolores, nesciunt explicabo.</h2>
                <p className='h-16 overflow-hidden leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt omnis, aut illo accusantium numquam, aspernatur temporibus iste explicabo laudantium ullam, saepe labore deleniti ipsa architecto doloremque vero molestiae enim nisi.</p>
            </div>
        </div>
    )
}

export default AdminPostItem