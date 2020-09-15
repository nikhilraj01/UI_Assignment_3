import React from "react"

const NewsItem = (props) =>{
    return (
        <div className="sortButtons">
           <label>Settings:</label>
                <select 
                onChange={e => props.onContent(e)}
                    name="sortContent"
                >
                    <option value="all">All</option>
                    <option value="story">Stories</option>
                    <option value="comment">Comments</option>
                    <option value="poll">Polls</option>
                    <option value="job">Jobs</option>
                </select>
                by
                <select 
                onChange={e => props.onType(e)}
                    name="sortType"
                >
                    <option value="date">Date</option>
                    <option value="popularity">Popularity</option>

                </select>
                for
                <select 
                onChange={e => props.onTime(e)}
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