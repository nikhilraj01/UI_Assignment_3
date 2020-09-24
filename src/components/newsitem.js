import React from "react"
export function Newsitem({item})
{
    if(item!==null || item!==undefined){
    return (
    <div>
        <div className="newsItem">
        {item.title}
        <a style={{color:"grey"}} href={item.url} > ({item.url})</a>
        <p >{item.score} points | {item.by} | {convertTime(item.time)} | {item.descendants} comments</p>
        <p>{item.type}</p>
    </div>
    </div>
    )}
}
const convertTime = (time) =>{
    const dateObject = new Date(time*1000)
    return dateObject.toLocaleString()
}
