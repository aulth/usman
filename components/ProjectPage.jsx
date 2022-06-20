import React, {useState, useEffect} from 'react'
import Technology from './Technology'
import Appsidebar from './Appsidebar'
const ProjectPage = ({data, technology}) => {
    const [width, setWidth] = useState()
    useEffect(() => {
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
        })
    }, [])
    
    return (
        <>
            <div className="glass screen-full box-border flex md:flex-row md:justify-center md:items-stretch flex-col items-center rounded-[18px] p-[8px]">
                <Appsidebar description={data.description} title={data.title} link={data.link} github={data.github} website={data.website} logo={data.logo}/>
                <div style={width<768?{minHeight:'calc(100vh - 46px)'}:{height:'calc(100vh - 46px)'}}className="md:w-[75%] w-full  md:ml-2 md:mt-0 mt-2 md:overflow-y-auto">
                    <div className="w-full glass rounded-lg ">
                        <div className="w-full flex justify-between font-semibold p-2 border-b-2 border-gray-400 ">
                            <h2 className="">Screenshot</h2>
                            <h2 className="">Demo</h2>
                        </div>
                        <div className="w-full p-2 flex">
                            <img src={data.screenshot} className='w-1/2' alt="" />
                            <iframe src={data.demo} className='w-1/2' frameBorder="0"></iframe>
                        </div>
                    </div>
                    <div className="w-full glass rounded-lg mt-2">
                        <h2 className="font-semibold p-2 border-b-2 border-gray-400 ">Description</h2>
                        <div className="w-full p-2">
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full glass rounded-lg mt-2">
                        <h2 className="font-semibold p-2 border-b-2 border-gray-400 ">Technology Used</h2>
                        <div className="w-full p-2 flex flex-wrap">
                            <Technology technology={technology} width={90} />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProjectPage