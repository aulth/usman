import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
const YouMightLike = ({ category }) => {
    const [data, setData] = useState();
    const fetchData = async () => {
        const response = await fetch(process.env.NODE_ENV == 'production' ? 'https://mohd-usman.vercel.app/api/blog/fetchcategory' : 'http://localhost:3000/api/blog/fetchcategory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ category: category })
        })
        var json = await response.json();
        if(json.success){
            json = json.article;
            json?.sort((a, b) => b.views - a.views);
            setData(json);
        }
    }
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <style jsx>
                {`
            .you-might-like::-webkit-scrollbar{
                height:0px;
              }
            //   .you-might-like::-webkit-scrollbar-button{
            //     background-color:rgba(6,182,212, 1);
            //     width:5px;
            //   }
              .you-might-like::-webkit-scrollbar-thumb {
                background-color: rgba(6,182,212,0.7);
              }`}
            </style>
            <div className="w-full rounded-lg p-4 ">
                <div className="w-full flex justify-between">
                    <h2 className="font-bold">You Might Like</h2>
                    <button className="flex items-center text-cyan-500">View all <IoIosArrowRoundForward className='mt-1' /></button>
                </div>
                <div className="w-full overflow-x-scroll overflow-y-hidden flex gap-4 mt-4 you-might-like ">
                    {
                        data && data.length>0 &&
                        data.map((data, index)=>{
                            return <div key={index} className='w-64 shrink-0'>
                            <img src={data.cover} className='w-full aspect-[10/7] object-cover rounded-lg' alt="" />
                            <div className="w-full mt-1">
                                <h2 className="font-bold">{data.title.slice(0, 57)}{data.title.length>57?"..":""}</h2>
                                <span className='text-sm'>{getFormattedDate(data.createdAt)}</span>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default YouMightLike