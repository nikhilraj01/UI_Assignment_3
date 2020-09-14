import axios from 'axios'

export const baseURL="https://hacker-news.firebaseio.com/v0/"
export const newsIdsURL=`${baseURL}newstories.json`
export const newsURL=`${baseURL}item/`

export  const getNewsids = async() =>{
    const result= await axios
    .get(`${newsIdsURL}`)
    .then(({ data }) => data);
    return result
}

export const getNewsItem = async newsId => {
    const result= await axios
    .get(`${newsURL+newsId}.json`)
    .then(({ data }) => data); 
    return result
}
