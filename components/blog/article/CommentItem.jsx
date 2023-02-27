import React from 'react'

const CommentItem = ({data}) => {
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    return (
        <div className="w-full flex gap-2 justify-start items-start mt-2">
            <div className="w-9 shrink-0">
                <img src={`https://ui-avatars.com/api/?background=random&name=${data?.name.split(" ").join("+")}`} className='w-full rounded-full aspect-square' alt="" />
            </div>
            <div className="w-full flex flex-col items-start justify-end  ">
                <h3 className="font-semibold -mt-1">{data?.name}</h3>
                <span className='text-sm'>{data && getFormattedDate(data.createdAt)}</span>
                <p>{data.remark}</p>
            </div>
        </div>
    )
}

export default CommentItem