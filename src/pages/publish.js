import dynamic from 'next/dynamic';
import { React, useState } from 'react';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})
import 'react-quill/dist/quill.snow.css';
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
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
const publish = () => {
    return (
        <>
         <QuillNoSSRWrapper modules={modules} onChange={(e)=>{console.log(e)}} theme="snow" />
        </>
    )
}

export default publish