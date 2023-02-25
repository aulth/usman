import React from 'react'

const Recent = () => {
    return (
        <div className="container m-auto flex gap-4 flex-col  xl:flex-row justify-center  xl:px-16 px-4 py-4">
            <div className="w-full  xl:w-[55%] rounded-lg border border-gray-300 h-60  xl:h-72 relative flex items-end">
                <img src="https://source.unsplash.com/random/?book/" className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                <div className="w-full rounded-lg h-60  xl:h-72 absolute top-0 bg-gradient-to-tr from-cyan-400 to-transparent"></div>
                <div className="w-full p-4 z-10 text-white">
                    <button className="text-sm">Story</button>
                    <h2 className="font-bold text-xl">Finding Strength in Adversity: A Journey of Resilience and Overcoming LifeChallenges with Courage, Perseverance, and Hope</h2>
                    <span className='text-sm'>February 26, 2023</span>
                </div>
            </div>
            <div className="w-full xl:w-[45%]   xl:h-72 flex gap-4">
                <div className="w-1/2 rounded-lg border border-gray-300 h-auto  xl:h-72 relative">
                    <img src="https://source.unsplash.com/random/?book/" className='h-36 xl:h-[11rem] w-full object-cover rounded-t-lg' alt="" />
                    <div className="p-2">
                        <h2 className="font-bold ">Finding Strength in Adversity: A Journey of Resilience and Overcoming Life's..</h2>
                        <span className='text-sm'>February 26, 2023</span>
                    </div>
                </div>
                <div className="w-1/2 rounded-lg border border-gray-300 h-auto  xl:h-72 relative">
                    <img src="https://source.unsplash.com/random/?book/" className='h-36 xl:h-[11rem] w-full object-cover rounded-t-lg' alt="" />
                    <div className="p-2">
                        <h2 className="font-bold ">Finding Strength in Adversity: A Journey of Resilience and Overcoming Life's..</h2>
                        <span className='text-sm'>February 26, 2023</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent