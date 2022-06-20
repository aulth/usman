import React from 'react'

const Technology = (props) => {
    return (
        <>
        {
            Object.keys(props.technology).map((item=>{
                if(props.technology[item]){
                    return <img key={item} src={`/technology/${item}.svg`} style={{width:`${props.width}px`}} />
                }else{
                    return null;
                }
            }))
        }
        </>
    )
}

export default Technology