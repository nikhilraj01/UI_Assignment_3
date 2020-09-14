import React from "react"
export function Newsitem({item})  
{
    if(item!==null || item!==undefined){
    return (
    <div>
        <div className="newsItem">
        {item.title} 
        <a style={{color:"grey"}} href={item.url} >({item.url})</a>
        <p >{item.score} points | {item.by} | {Date(item.time*1000)} | {item.descendants} comments</p>
    </div>
    </div>
    )}
}
