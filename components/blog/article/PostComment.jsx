import React, {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';

const PostComment = ({id}) => {
    const [data, setData] = useState({name:"", remark:""});
    const publishRemark = async (e)=>{
        e.preventDefault();
        const response = await fetch('/api/blog/postcomment', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({data:data, id:id})
        })
        const json = await response.json();
        if(json.success){
            toast.success(json.msg);
            setData({name:"", remark:""})
        }else{
            toast.error(json.msg)
        }
    }
    const handleOnChange = (e) =>{
        e.preventDefault();
        setData({...data, [e.target.name]:e.target.value})
    }
    return (
        <>
        <Toaster position='top-right'/>
            <div className="w-full rounded-lg p-4 ">
                <h2 className="font-bold">Share your remarks</h2>
                <form onSubmit={publishRemark} className='mt-2 flex flex-col gap-4'>
                    <div className="w-full relative">
                        <label className="text-[10px] bg-white px-1 absolute -top-2 left-1 text-gray-500">Name</label>
                        <input value={data.name} onChange={handleOnChange} required name="name" type="text" placeholder='Enter your name' className='w-full p-1 border rounded border-gray-200  focus:outline focus:outline-cyan-400' />
                    </div>
                    <div className="w-full relative">
                        <label className="text-[10px] bg-white px-1 absolute -top-2 left-1 text-gray-500">Remark</label>
                        <textarea value={data.remark} onChange={handleOnChange} required name="remark" id="" placeholder='Type your thought..' className='w-full border border-gray-200 p-1 rounded focus:outline focus:outline-cyan-400'></textarea>
                    </div>
                    <button type="submit" className='px-2 py-1  bg-gradient-to-r from-purple-500 to-blue-500 -mt-2 rounded text-white'>Post</button>
                </form>
            </div>

        </>
    )
}

export default PostComment