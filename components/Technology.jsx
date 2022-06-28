import React from 'react'
import Image from 'next/image'
const Technology = (props) => {
    return (
        <>
        {
            Object.keys(props.technology).map((item=>{
                if(props.technology[item]){
                    return <Image key={item} src={`/technology/${item}.svg`} width={props.width} height={props.width} alt={item} />
                }else{
                    return null;
                }
            }))
        }
        </>
    )
}

export default Technology