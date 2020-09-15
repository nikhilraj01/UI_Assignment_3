import React, { useState } from "react"
import  Logo from './logo.png';
import OptionsBar from "./optionsbar.js"
import ItemsContainer from "./itemcontainer.js"
import Search from "./search.js"

const NewsWindow = () =>{
    const [sortContent, setSortContent] = useState("all");
    const [sortType, setSortType] = useState("time");
    const [sortTime, setSortTime] = useState("alltime");
    const [searchText, SetSearchText] = useState([""]);
    
    const onChangeSortContent = (event) => {
        setSortContent(event.target.value)
    }
    const onChangeSortType = (event) => {
        setSortType(event.target.value)
    }
    const onChangeSortTime = (event) => {
        setSortTime(event.target.value)
    }

    const onChangeFilterText = (event) => {
        SetSearchText(event.target.value) 
    }
    return (
        <div className="news-window">
            <div className="header">
                <img src={Logo} alt="Search Hacker News"/>
                <p>Search <span> Hacker News</span></p>
                <Search onClick={onChangeFilterText}/>
                
            </div>

        <div>
            <OptionsBar onContent={onChangeSortContent} onType={onChangeSortType} onTime={onChangeSortTime}/>
        </div>
        
        <ItemsContainer Search={searchText} Content={sortContent} Type={sortType} Time={sortTime}  />
        </div>
    )
}

export default NewsWindow