import Navbar from 'components/blog/Navbar'
import React from 'react'
import Link from 'next/link'
import Popular from 'components/blog/home/Popular'
import Subscribe from 'components/blog/home/Subscribe'
import Footer from 'components/blog/Footer'
const Index = () => {
    return (
        <>
        
            <Navbar />
            <div className="container m-auto flex gap-4 flex-col xl:flex-row xl:px-16 px-4 py-4">
                <div className="w-full flex flex-col gap-4 xl:w-[60%]">
                    <div className="w-full rounded-lg">
                        <div className="container m-auto flex gap-4 flex-col    justify-center  ">
                            <div className="w-full  rounded-lg border border-gray-300 h-60  xl:h-72 relative flex items-end">
                                <img src="https://source.unsplash.com/random/?story/" className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                                <Link href={"/blog/category/story/"}>
                                    <div className="w-full rounded-lg h-60  xl:h-72 absolute top-0 bg-gradient-to-tr hover:from-cyan-400 from-gray-800 to-transparent"></div>
                                </Link>
                                <div className="w-full p-4 z-10 text-white">
                                    <button className="text-sm">Story</button>
                                    <Link href={`/blog/category/story/`} ><h2 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis amet et excepturi dolores corrupti fugit. Dolorum, quasi quod ipsum provident eveniet optio magni quis in! Explicabo vitae fuga deserunt.</h2></Link>
                                    <span className='text-sm'></span>
                                </div>
                            </div>
                            <div className="w-full  rounded-lg border border-gray-300 h-60  xl:h-72 relative flex items-end">
                                <img src="https://source.unsplash.com/random/?thoughts/" className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                                <Link href={"/blog/category/thoughts/"}>
                                    <div className="w-full rounded-lg h-60  xl:h-72 absolute top-0 bg-gradient-to-tr  hover:from-cyan-400 from-gray-800 to-transparent"></div>
                                </Link>
                                <div className="w-full p-4 z-10 text-white">
                                    <button className="text-sm">Thoughts</button>
                                    <Link href={`/blog/category/thoughts/`} ><h2 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis amet et excepturi dolores corrupti fugit. Dolorum, quasi quod ipsum provident eveniet optio magni quis in! Explicabo vitae fuga deserunt.</h2></Link>
                                    <span className='text-sm'></span>
                                </div>
                            </div>
                            <div className="w-full  rounded-lg border border-gray-300 h-60  xl:h-72 relative flex items-end">
                                <img src="https://source.unsplash.com/random/?story/" className='h-full w-full object-cover rounded-lg absolute top-0' alt="" />
                                <Link href={"/blog/category/tips/"}>
                                    <div className="w-full rounded-lg h-60  xl:h-72 absolute top-0 bg-gradient-to-tr  hover:from-cyan-400 from-gray-800 to-transparent"></div>
                                </Link>
                                <div className="w-full p-4 z-10 text-white">
                                    <button className="text-sm">Tips</button>
                                    <Link href={`/blog/category/tips/`} ><h2 className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reiciendis amet et excepturi dolores corrupti fugit. Dolorum, quasi quod ipsum provident eveniet optio magni quis in! Explicabo vitae fuga deserunt.</h2></Link>
                                    <span className='text-sm'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 xl:w-[40%]">
                    <div className="w-full rounded-lg bg-white">
                        <Popular />
                    </div>
                    <div className="w-full rounded-lg bg-white">
                        <Subscribe />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index