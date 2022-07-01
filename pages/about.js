import React from 'react'
import Link from 'next/link'
const About = () => {
    return (
        <>
            <div className='glass rounded-[18px] box-border screen-full mb-[15px]' >
                <div className="w-full flex flex-col items-end px-4 py-2 border-b border-gray-400">
                    <Link href="/" ><h2 className="text-2xl font-semibold cursor-pointer duration-200 hover:scale-105">Mohd Usman</h2></Link>
                    <p>Sant Kabir Nagar, (U.P.) 272199, +91 9839872992</p>
                </div>
                <div className="w-full p-2 pb-4 border-b border-gray-400">
                    <h2 className="text-xl font-bold ml-2">Experience</h2>
                    <div className="w-full flex flex-wrap">
                        <div className='glass mx-1 p-1 rounded-md'>
                            <h2 className="text-lg font-semibold">IIT Delhi</h2>
                            <p>March 2021 to Dec 2021</p>
                            <p>Campus Ambassador</p>
                        </div>
                        <div className='glass mx-1 p-1 rounded-md'>
                            <h2 className="text-lg font-semibold">IIT Delhi</h2>
                            <p>March 2021 to Dec 2021</p>
                            <p>Campus Ambassador</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2 pb-4 border-b border-gray-400">
                    <h2 className="text-xl font-bold ml-2">Education</h2>
                    <div className="w-full flex flex-wrap">
                        <div className='glass m-1 p-1 rounded-md'>
                            <h2 className="text-lg font-semibold">B.Tech (EE) 2nd Year</h2>
                            <p>Jamia Millia Islamia New Delhi</p>
                            <p>2020 to 2024</p>
                        </div>
                        <div className='glass m-1 p-1 rounded-md'>
                            <h2 className="text-lg font-semibold">Intermediate</h2>
                            <p>DAV Inter College Mehndawal</p>
                            <p>2017 to 2019</p>
                        </div>
                        <div className='glass m-1 p-1 rounded-md'>
                            <h2 className="text-lg font-semibold">High School</h2>
                            <p>DAV Inter College Mehndawal</p>
                            <p>2015 to 2017</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2 pb-4 border-b border-gray-400">
                    <h2 className="text-xl font-bold ml-2">Additional Details</h2>
                    <div className="w-full flex flex-wrap">
                        <div className='glass m-1 p-1 rounded-md'>
                            <h2 className="text-lg font-semibold">JEE (Main+Advance)</h2>
                            <p>Qualified</p>
                            <p>2020</p>
                        </div>
                        <div className='glass m-1 p-1 rounded-md'>
                            <h2 className="text-lg font-semibold">Class 12th</h2>
                            <p>1st Rank in College</p>
                            <p>2019</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About