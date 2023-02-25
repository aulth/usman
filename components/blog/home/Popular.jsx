import React from 'react'

const Popular = () => {
    return (
        <div className="w-full flex gap-4 flex-col p-4">
            <h2 className="font-bold">Popular Articles</h2>
            <div className='rounded-lg h-60 w-full border border-gray-200 relative flex items-end'>
                <img src="https://source.unsplash.com/random/?book/" className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                <div className="w-full rounded-lg h-60  absolute top-0 bg-gradient-to-tr from-cyan-400 to-transparent"></div>
                <div className="w-full p-4 z-20 text-white">
                    <button className="text-sm">Story</button>
                    <h2 className="font-bold text-xl">Finding Strength in Adversity: A Journey of Resilience...</h2>
                    <span className='text-sm'>February 26, 2023</span>
                </div>
            </div>
            <div className='rounded-lg  w-full  relative flex flex-col gap-4 '>
                    <div className="w-full h-16 flex gap-2 justify-start">
                        <div className='w-24 rounded shrink-0'>
                            <img src="https://source.unsplash.com/random/?book/" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold h-16 overflow-hidden leading-5">Finding Strength in Adversity: A Journey of Resilience and Overcoming LifeChallenges with Courage, Perseverance, and Hope</h2>
                            <span className='text-sm'>February 26, 2023</span>
                        </div>
                    </div>
                    <div className="w-full h-16 flex gap-2 justify-start">
                        <div className='w-24 rounded shrink-0'>
                            <img src="https://source.unsplash.com/random/?book/" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold h-16 overflow-hidden leading-5">Finding Strength in Adversity: A Journey of Resilience and Overcoming LifeChallenges with Courage, Perseverance, and Hope</h2>
                            <span className='text-sm'>February 26, 2023</span>
                        </div>
                    </div>
                    <div className="w-full h-16 flex gap-2 justify-start">
                        <div className='w-24 rounded shrink-0'>
                            <img src="https://source.unsplash.com/random/?book/" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold h-16 overflow-hidden leading-5">Finding Strength in Adversity: A Journey of Resilience and Overcoming LifeChallenges with Courage, Perseverance, and Hope</h2>
                            <span className='text-sm'>February 26, 2023</span>
                        </div>
                    </div>
                    <div className="w-full h-16 flex gap-2 justify-start">
                        <div className='w-24 rounded shrink-0'>
                            <img src="https://source.unsplash.com/random/?book/" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold h-16 overflow-hidden leading-5">Finding Strength in Adversity: A Journey of Resilience and Overcoming LifeChallenges with Courage, Perseverance, and Hope</h2>
                            <span className='text-sm'>February 26, 2023</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Popular