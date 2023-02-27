import React, { useEffect, useState } from 'react'

const Popular = () => {
    const [data, setData] = useState();
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
    const fetchData = async () => {
        const response = await fetch('/api/blog/fetchall');
        var json = await response.json();
        if (json.success) {
            json = json.article;
            json?.sort((a, b) => b.views - a.views);
            setData(json);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="w-full flex gap-4 flex-col p-4">
            <h2 className="font-bold">Popular Articles</h2>
            {
                data && data.length > 0 &&
                <div className='rounded-lg h-60 w-full border border-gray-200 relative flex items-end'>
                    <img src="https://source.unsplash.com/random/?book/" className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                    <div className="w-full rounded-lg h-60  absolute top-0 bg-gradient-to-tr from-cyan-400 to-transparent"></div>
                    <div className="w-full p-4 z-10 text-white">
                        <button className="text-sm">{data && data[0]?.category[0].toUpperCase()}{data && data[0]?.category.slice(1).toLowerCase()}</button>
                        <h2 className="font-bold text-xl">{data && data[0]?.title.slice(0, 58)}{data && data[0]?.title.length > 57 ? ".." : ""}</h2>
                        <span className='text-sm'>{getFormattedDate(data && data[0]?.createdAt)}</span>
                    </div>
                </div>
            }
            <div className='rounded-lg  w-full  relative flex flex-col gap-4 '>
                {
                    data && data.length > 0 &&
                    data.map((data, index) => {
                        if (index == 0 || index >= 5) {
                            return;
                        }
                        return <div key={index} className="w-full h-16 flex gap-2 justify-start">
                            <div className='w-24 rounded shrink-0'>
                                <img src={data.cover} className='w-full h-full object-cover rounded-lg' alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="font-semibold h-16 overflow-hidden leading-5">{data && data?.title}</h2>
                                <span className='text-sm'>{getFormattedDate(data && data?.createdAt)}</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Popular