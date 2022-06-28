import React from 'react'
import {AiOutlineTwitter, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import {MdOutlineFacebook} from 'react-icons/md'
const Social = () => {
  return (
    <>
    <div className="w-full flex justify-center items-center">
        <a href='https://twitter.com/yem_usman' target="_blank" rel="noreferrer" className="flex justify-center items-center text-4xl">
            <AiOutlineTwitter />
        </a>
        <a href='https://facebook.com/yemusman' target="_blank" rel="noreferrer" className="flex justify-center items-center text-4xl">
            <MdOutlineFacebook />
        </a>
        <a href='https://instagram.com/yem.usman' target="_blank" rel="noreferrer" className="flex justify-center items-center text-4xl">
            <AiFillInstagram />
        </a>
        <a href='https://github.com/aulth' target="_blank" rel="noreferrer" className="flex justify-center items-center text-4xl">
            <AiFillGithub />
        </a>
    </div>
    </>
  )
}

export default Social