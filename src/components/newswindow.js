import React, { useState } from "react"
import Header from "./header"
import OptionsBar from "./optionsbar.js"
import ItemsContainer from "./itemcontainer.js"
const NewsWindow = () =>{
    const [sortContent, setSortContent] = useState("all");
    const onChangeSortContent = (event) => {
        setSortContent(event.target.value)
    }
    return (
        <div className="newsWindow">
            <div>
                <Header />
            </div>
        <div>
            <OptionsBar />
        </div>
        <ItemsContainer />
        </div>
    )
}

export default NewsWindow