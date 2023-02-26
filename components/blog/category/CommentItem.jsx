import React from 'react'

const CommentItem = () => {
    return (
        <div className="w-full flex gap-2 justify-start items-start mt-2">
            <div className="w-9 shrink-0">
                <img src="https://source.unsplash.com/random/?user/" className='w-full rounded-full aspect-square' alt="" />
            </div>
            <div className="w-full flex flex-col items-start justify-end  ">
                <h3 className="font-semibold -mt-1">Mohd Usman</h3>
                <span className='text-sm'>February 26, 2023</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea illum nesciunt nobis, repellendus velit nemo. Exercitationem quaerat, repudiandae voluptatibus eius voluptatem tempora. Minima tenetur perferendis natus qui obcaecati atque.</p>
            </div>
        </div>
    )
}

export default CommentItem