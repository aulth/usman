import React from 'react'
import Image from 'next/image'
const Technology = (props) => {
    let link=[];
    let tech = Object.keys(props.technology)
    for(let name of tech){
        switch (name){
            case 'html':
                link.push("https://developer.mozilla.org/en-US/docs/Web/HTML");
                break;
            case 'css':
                link.push("https://developer.mozilla.org/en-US/docs/Web/CSS");
                break;
            case 'js':
                link.push("https://developer.mozilla.org/en-US/docs/Web/JavaScript");
                break;
            case 'reactjs':
                link.push('https://reactjs.org/');
                break;
            case 'nextjs':
                link.push('https://nextjs.org/');
                break;
            case 'nodejs':
                link.push('https://nodejs.org/en/');
                break;
            case 'expressjs':
                link.push('https://expressjs.com/');
                break;
            case 'mongodb':
                link.push('https://www.mongodb.com/');
                break;
            case 'mysql':
                link.push('https://www.mysql.com/');
                break;
            case 'tailwind':
                link.push('https://tailwindcss.com/');
                break;
            case 'bootstrap':
                link.push('https://getbootstrap.com/');
                break;
            case 'vercel':
                link.push('https://vercel.com/');
                break;
            case 'github':
                link.push('http://github.com/')
                break;
            case 'animxyz':
                link.push('https://animxyz.com/');
                break;
            case 'heroku':
                link.push('https://heroku.com/');
                break;
            default:{
                link.push('');
            }
        }
    }
    return (
        <>
        {
            Object.keys(props.technology).map(((item, index)=>{
                if(props.technology[item]){
                    return <a target="_blank" rel="noreferrer" key={index} href={link[index]}><Image key={item} src={`/technology/${item}.svg`} width={props.width} height={props.width} alt={item} /></a>
                }else{
                    return null;
                }
            }))
        }
        </>
    )
}

export default Technology