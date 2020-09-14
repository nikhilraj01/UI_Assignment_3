import React from "react"
import  Logo from './logo.png';
import Search from "./search.js"
import Settings from "./settings.js"


function header()
{
    return (
        <div>
            <div className="header">
                <img src={Logo} alt="Search Hacker News"/>
                <p>Search <span> Hacker News</span></p>
                <Search />
                <Settings />
            </div>
        </div>
    )
}

export default header