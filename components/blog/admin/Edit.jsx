import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { AiOutlineSave } from 'react-icons/ai'
import { RiArchiveDrawerLine } from 'react-icons/ri'
import { IoIosSend } from 'react-icons/io'
import { MdOutlineInsertPhoto } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast';
import { IKContext, IKUpload } from 'imagekitio-react';
import { Editor } from '@tinymce/tinymce-react';
const publicKey = process.env.NEXT_PUBLIC_imagekitPublicKey;
const urlEndpoint = process.env.NEXT_PUBLIC_imagekitUrlEndPoint;
const authenticationEndpoint = 'https://mohd-usman.vercel.app/api/imagekit/get';
console.log(authenticationEndpoint)
import 'react-quill/dist/quill.snow.css';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})
const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{
            'color': [
                "#FF4136", // Red
                "#FF851B", // Orange
                "#FFDC00", // Yellow
                "#2ECC40", // Green
                "#0074D9", // Blue
                "#001f3f", // Navy
                "#7FDBFF", // Sky Blue
                "#F012BE", // Magenta
                "#B10DC9", // Purple
                "#85144b", // Maroon
                "#39CCCC", // Teal
                "#3D9970", // Olive
                "#2E2E2E", // Dark Gray
                "#AAAAAA", // Gray
                "#F5F5F5", // Light Gray
                "#FF6F61", // Coral
                "#A463F2", // Lavender
                "#FFA07A", // Light Salmon
                "#40E0D0", // Turquoise
                "#C71585", // Medium Violet Red
                "#8B0000", // Dark Red
                "#FFD700", // Gold
                "#FF1493", // Deep Pink
                "#7CFC00", // Lawn Green
                "#4169E1", // Royal Blue
                "#800080", // Purple
                "#008080", // Teal
                "#696969", // Dim Gray
                "#DCDCDC", // Gainsboro
                "#F08080", // Light Coral
                "#DA70D6", // Orchid
                "#FF6347", // Tomato
                "#7B68EE", // Medium Slate Blue
                "#20B2AA", // Light Sea Green
                "#DAA520", // Golden Rod
                "#00CED1", // Dark Turquoise
                "#F4A460", // Sandy Brown
                "#BA55D3", // Medium Orchid
                "#FFC0CB", // Pink
                "#00FA9A", // Medium Spring Green
                "rgb(6,182,212)",
                "rgb(248,113,113)"
            ]
        },
        {
            'background': [
                "#FF4136", // Red
                "#FF851B", // Orange
                "#FFDC00", // Yellow
                "#2ECC40", // Green
                "#0074D9", // Blue
                "#001f3f", // Navy
                "#7FDBFF", // Sky Blue
                "#F012BE", // Magenta
                "#B10DC9", // Purple
                "#85144b", // Maroon
                "#39CCCC", // Teal
                "#3D9970", // Olive
                "#2E2E2E", // Dark Gray
                "#AAAAAA", // Gray
                "#F5F5F5", // Light Gray
                "#FF6F61", // Coral
                "#A463F2", // Lavender
                "#FFA07A", // Light Salmon
                "#40E0D0", // Turquoise
                "#C71585", // Medium Violet Red
                "#8B0000", // Dark Red
                "#FFD700", // Gold
                "#FF1493", // Deep Pink
                "#7CFC00", // Lawn Green
                "#4169E1", // Royal Blue
                "#800080", // Purple
                "#008080", // Teal
                "#696969", // Dim Gray
                "#DCDCDC", // Gainsboro
                "#F08080", // Light Coral
                "#DA70D6", // Orchid
                "#FF6347", // Tomato
                "#7B68EE", // Medium Slate Blue
                "#20B2AA", // Light Sea Green
                "#DAA520", // Golden Rod
                "#00CED1", // Dark Turquoise
                "#F4A460", // Sandy Brown
                "#BA55D3", // Medium Orchid
                "#FFC0CB", // Pink
                "#00FA9A", // Medium Spring Green
                "rgb(6,182,212)",
                "rgb(248,113,113)"
            ]
        }],
        ['link', 'image', 'video'],
        ['clean'],
        [{ 'direction': 'rtl' }],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
const Edit = ({ article }) => {
    const [data, setData] = useState(article);
    const [content, setContent] = useState(article?.content)
    useEffect(() => {
        if (typeof window != undefined) {
        }
    }, [])
    const handleOnContentChange = (e) => {
        setContent(e);
    }
    const handleOnChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleOnPublish = async (e) => {
        e.preventDefault();
        if (!data.title) {
            toast.error('Please Enter the Title')
            return;
        }
        if (!data.category) {
            toast.error('Please Choose the Category')
            return;
        }
        if (!data.cover) {
            toast.error('Please Upload Cover Photo')
            return;
        }
        document.querySelector('.adminVerify').classList.remove('hidden');
    }
    const verifyAndPublish = async (e) => {
        e.preventDefault();
        if (document.getElementById('pin').value == process.env.NEXT_PUBLIC_ADMIN_PIN) {
            toast.success("Authenticated");
            document.querySelector('.adminVerify').classList.add('hidden');
            const response = await fetch('/api/blog/edit', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ data: { title: data.title, category: data.category, cover: data.cover, content: content, live: true }, id: data._id })
            })
            const json = await response.json();
            if (json.success) {
                toast.success(json.msg)
            } else {
                toast.error(json.msg)
            }
        } else {
            toast.error("Not authenticated")
        }
    }
    const handleOnSave = async (e) => {
        e.preventDefault();
        if (!data.title) {
            toast.error('Please Enter the Title')
            return;
        }
        if (!data.category) {
            toast.error('Please Choose the Category')
            return;
        }
        document.querySelector('.adminVerify-save').classList.remove('hidden');
    }
    const verifyAndSave = async (e) => {
        e.preventDefault();
        if (document.getElementById('pin-save').value == process.env.NEXT_PUBLIC_ADMIN_PIN) {
            toast.success("Authenticated");
            document.querySelector('.adminVerify-save').classList.add('hidden');
            const response = await fetch('/api/blog/edit', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ data: { title: data.title, category: data.category, cover: data.cover, content: content, live: false }, id: data._id })
            })
            const json = await response.json();
            if (json.success) {
                toast.success(json.msg)
            } else {
                toast.error(json.msg)
            }
        } else {
            toast.error("Not authenticated")
        }
    }
    const onError = (err) => {
        toast.error("Cover Photo Not Uploaded");
        console.log(err);
    };
    const onSuccess = async (res) => {
        toast.success("Cover Photo Uploaded");
        setData({ ...data, cover: res.url });
    }
    return (
        <>
            <Toaster position='top-right' />
            <script src={`https://cdn.tiny.cloud/1/${process.env.NEXT_PUBLIC_TINYAPI}/tinymce/6/tinymce.min.js`} referrerpolicy="origin"></script>
            <div className="container m-auto px-4 py-4 md:px-12  relative">
                <form onSubmit={handleOnPublish} className="w-full flex flex-col gap-4 bg-white rounded-lg p-4">
                    <div className="w-full flex justify-between">
                        <h2 className="font-bold text-xl">Edit your article</h2>
                        <div className="flex gap-2 items-center text-lg">
                            <button className='hover:text-cyan-500'><RiArchiveDrawerLine /></button>
                            <button onClick={handleOnSave} className=' hover:text-cyan-500'><AiOutlineSave /></button>
                            <button type='submit' className='text-xl hover:text-cyan-500'><IoIosSend /></button>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <input value={data.title} type="text" name='title' onChange={handleOnChange} placeholder='Title...' className='p-2 border-b border-gray-200 w-full text-lg font-semibold focus:border-cyan-400 focus:outline-none' />
                    </div>
                    <div className="flex items-center ">
                        <select value={data.category} onChange={handleOnChange} name="category" id="" className='w-full p-2 focus:outline-none focus:border-cyan-400 border-b border-gray-200'>
                            <option value="">Select Category</option>
                            <option value="story">Story</option>
                            <option value="tips">Tips</option>
                            <option value="thoughts">Thoughts</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col p-2">
                        <label className='mb-2'>Cover Photo</label>
                        <IKContext publicKey={publicKey} urlEndpoint={urlEndpoint} authenticationEndpoint={authenticationEndpoint}>
                            <IKUpload onSuccess={onSuccess} onError={onError} />
                        </IKContext>
                    </div>
                    <div className="w-full">
                        <QuillNoSSRWrapper defaultValue={article?.content} modules={modules} onChange={handleOnContentChange} theme="snow" />
                        {/* <textarea id="body" name="" className='w-full p-2 focus:outline-none focus:border-cyan-400 border-b border-gray-200'>
                        </textarea> */}
                    </div>
                </form>
            </div>
            <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 hidden  adminVerify">
                {/* Modal background */}
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
                {/* Modal content */}
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <form onSubmit={verifyAndPublish} className="m-auto w-full flex flex-col gap-4 p-4">
                        <h2 className="font-semibold text-center">Admin Password</h2>
                        <input type="text" placeholder='Pin' id='pin' className='w-full p-1 focus:border-cyan-400 focus:outline-none border-b border-gray-200' required />
                        <div className="w-full flex gap-2">
                            <button type="submit" className='w-full px-2 py-1 bg-gradient-to-tr from-cyan-400 to-blue-400 text-white'>Verify</button>
                            <button type="button" onClick={() => { document.querySelector('.adminVerify').classList.add('hidden') }} className='w-8 flex justify-center items-center  p-1 bg-gradient-to-tr from-cyan-400 to-blue-400 text-white'><IoMdClose className='text-white' /></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 hidden  adminVerify-save">
                {/* Modal background */}
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
                {/* Modal content */}
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <form onSubmit={verifyAndSave} className="m-auto w-full flex flex-col gap-4 p-4">
                        <h2 className="font-semibold text-center">Admin Password</h2>
                        <input type="text" placeholder='Pin' id='pin-save' className='w-full p-1 focus:border-cyan-400 focus:outline-none border-b border-gray-200' required />
                        <div className="w-full flex gap-2">
                            <button type="submit" className='w-full px-2 py-1 bg-gradient-to-tr from-cyan-400 to-blue-400 text-white'>Verify</button>
                            <button type="button" onClick={() => { document.querySelector('.adminVerify-save').classList.add('hidden') }} className='w-8 flex justify-center items-center  p-1 bg-gradient-to-tr from-cyan-400 to-blue-400 text-white'><IoMdClose className='text-white' /></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Edit