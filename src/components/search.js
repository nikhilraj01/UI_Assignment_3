import React from "react"


export function Search()
{
    return (
        <div>
           <input
           className="search"
           type="text"
           name="searchText"
           placeholder="Search stories by title, url or author"
           />
        </div>
    )
}

export default Search