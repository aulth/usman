import React from 'react'
import { CiUser } from 'react-icons/ci'
import CommentItem from './CommentItem'
import PostComment from './PostComment'
const Comment = () => {
    return (
        <>
            <div className="w-full rounded-lg p-4 ">
                <h2 className="font-bold">Remarks</h2>
                <div className="w-full flex flex-col gap-2">
                    <CommentItem/>
                    <CommentItem/>
                    <CommentItem/>
                </div>
            </div>
        </>
    )
}

export default Comment