import React, { useEffect, useState } from 'react'
import { AiOutlineSave } from 'react-icons/ai'
import { RiArchiveDrawerLine } from 'react-icons/ri'
import { IoIosSend } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast';
const Draft = ({ article }) => {
    const [data, setData] = useState(article);
    useEffect(() => {
        if (typeof window != undefined) {
            tinymce.init({
                selector: 'textarea',
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                ]
            });
            setTimeout(() => {
                tinymce.activeEditor.setContent(article.content);
            }, 1000);
        }
    }, [])
    const getContent = () => {
        return tinymce.activeEditor.getContent();
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
        const response = await fetch('/api/blog/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ data: { title: data.title, category: data.category, content: getContent(), live: true }, id:article._id })
        })
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
        const response = await fetch('/api/blog/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ data: { title: data.title, category: data.category, content: getContent(), live: false } , id:article._id})
        })
    }
    return (
        <>
            <Toaster position='top-right' />
            <script src="https://cdn.tiny.cloud/1/qwfy7cqg2y46sk7kpn2l1hkrslmxmwv109nquwo64o6soqbu/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
            <div className="container m-auto px-4 py-4 md:px-12  relative">
                <form onSubmit={handleOnPublish} className="w-full flex flex-col gap-4 bg-white rounded-lg p-4">
                    <div className="w-full flex justify-between">
                        <h2 className="font-bold text-xl">Compose your article</h2>
                        <div className="flex gap-2 items-center text-lg">
                            <button className='hover:text-cyan-500'><RiArchiveDrawerLine /></button>
                            <button onClick={handleOnSave} className=' hover:text-cyan-500'><AiOutlineSave /></button>
                            <button type='submit' className='text-xl hover:text-cyan-500'><IoIosSend /></button>
                        </div>
                    </div>
                    <div className="flex items-center ">
                        <input type="text" value={data.title} name='title' onChange={handleOnChange} placeholder='Title...' className='p-2 border-b border-gray-200 w-full text-lg font-semibold focus:border-cyan-400 focus:outline-none' />
                    </div>
                    <div className="flex items-center ">
                        <select value={data.category} onChange={handleOnChange} name="category" id="" className='w-full p-2 focus:outline-none focus:border-cyan-400 border-b border-gray-200'>
                            <option value="">Select Category</option>
                            <option value="story">Story</option>
                            <option value="tips">Tips</option>
                            <option value="thoughts">Thoughts</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <textarea id="body" name="" className='w-full p-2 focus:outline-none focus:border-cyan-400 border-b border-gray-200'>
                        </textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Draft