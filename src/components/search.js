import React from "react"


const Search = ({onClick}) => {
    return (
        <div>
           <input
           className="search"
           type="text"
           name="searchText"
           placeholder="Search stories by title, url or author"
           onChange={e => onClick(e)}
           />
        </div>
    )
}

export default Search