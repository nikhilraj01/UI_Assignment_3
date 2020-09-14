import React from "react"

function NewsItem({onChangeSortContent})
{
    return (
        <div className="sortButtons">
           <label>Settings:</label>
                <select 
                onChange={onChangeSortContent}
                    name="sortContent"
                >
                    <option value="all">All</option>
                    <option value="stories">Stories</option>
                    <option value="comments">Comments</option>
                </select>
                by
                <select 
                    name="sortType"
                >
                    <option value="popularity">Popularity</option>
                    <option value="date">Date</option>

                </select>
                for
                <select 
                    name="sortTime"
                >
                    <option value="alltime">All time</option>
                    <option value="pastday">Last 24h</option>
                    <option value="pastweek">Past Week</option>
                    <option value="pastmonth">Past Month</option>
                    <option value="pastyear">Past Year</option>
                </select>

        </div>
    )
}

export default NewsItem