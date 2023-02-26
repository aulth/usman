import Link from 'next/link'
import React, {useState , useEffect} from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
const Thoughts = ({data}) => {
    const [thoughts, setThoughts] = useState()
    useEffect(() => {
        setThoughts(data.filter(item => item.category == 'thoughts'));
    }, [])
    const getFormattedDate = (str) => {
        const date = new Date(str);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        return formattedDate;
    }
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
                <h2 className="font-bold">Thoughts</h2>
                <Link href={'/blog/category/thoughts'} className="flex items-center text-cyan-500">View all <IoIosArrowRoundForward className='mt-1' /></Link>
            </div>
            <div className="w-full overflow-x-scroll overflow-y-hidden flex gap-4 mt-4 you-might-like ">
                {
                    thoughts && thoughts.length>0 &&
                    thoughts.map((thought, index)=>{
                        return <div key={index} className='w-64 shrink-0'>
                        <img src={thought.cover} className='w-full aspect-[10/7] object-cover rounded-lg' alt="" />
                        <div className="w-full mt-1">
                            <Link href={`blog/article/${thought.link}`}><h2 className="font-bold">{thought.title.slice(0, 57)}{thought.title.length>57?"..":"" } </h2></Link>
                            <span className='text-sm'>{getFormattedDate(thought.createdAt)}</span>
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Thoughts