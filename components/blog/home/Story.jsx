import React from 'react'
import {IoIosArrowRoundForward} from 'react-icons/io'
const Story = () => {
    return (
        <div className="w-full rounded-lg p-4">
            <div className="w-full flex justify-between">
                <h2 className="font-bold">Story</h2>
                <button className="flex items-center text-cyan-500">View all <IoIosArrowRoundForward className='mt-1'/></button>
            </div>
            <div className="w-full flex gap-4 flex-col xl:flex-row mt-4">
                <div className='rounded-lg h-[19rem] w-full xl:w-[45%] border border-gray-200 relative flex items-end'>
                    <img src="https://source.unsplash.com/random/?book/" className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                    <div className="w-full rounded-lg h-[19rem]  absolute top-0 bg-gradient-to-tr from-cyan-400 to-transparent"></div>
                    <div className="w-full p-4 z-20 text-white">
                        <button className="text-sm">Story</button>
                        <h2 className="font-bold text-xl">Finding Strength in Adversity: A Journey of Resilience...</h2>
                        <span className='text-sm'>February 26, 2023</span>
                    </div>
                </div>
                <div className='rounded-lg h-[19rem] w-full xl:w-[55%]  relative flex flex-col gap-4 '>
                    <div className="w-full h-16 flex gap-2 justify-start">
                        <div className='w-24 rounded shrink-0'>
                            <img src="https://source.unsplash.com/random/?book/" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold h-16 overflow-hidden leading-5">Finding Strength in Adversity: A Journey of Resilience and Overcoming Life's Challenges with Courage, Perseverance, and Hope</h2>
                            <span className='text-sm'>February 26, 2023</span>
                        </div>
                    </div>
                    <div className="w-full h-16 flex gap-2 justify-start">
                        <div className='w-24 rounded shrink-0'>
                            <img src="https://source.unsplash.com/random/?book/" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold h-16 overflow-hidden leading-5">Finding Strength in Adversity: A Journey of Resilience and Overcoming Life's Challenges with Courage, Perseverance, and Hope</h2>
                            <span className='text-sm'>February 26, 2023</span>
                        </div>
                    </div>
                    <div className="w-full h-16 flex gap-2 justify-start">
                        <div className='w-24 rounded shrink-0'>
                            <img src="https://source.unsplash.com/random/?book/" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold h-16 overflow-hidden leading-5">Finding Strength in Adversity: A Journey of Resilience and Overcoming Life's Challenges with Courage, Perseverance, and Hope</h2>
                            <span className='text-sm'>February 26, 2023</span>
                        </div>
                    </div>
                    <div className="w-full h-16 flex gap-2 justify-start">
                        <div className='w-24 rounded shrink-0'>
                            <img src="https://source.unsplash.com/random/?book/" className='w-full h-full object-cover rounded-lg' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-semibold h-16 overflow-hidden leading-5">Finding Strength in Adversity: A Journey of Resilience and Overcoming Life's Challenges with Courage, Perseverance, and Hope</h2>
                            <span className='text-sm'>February 26, 2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story