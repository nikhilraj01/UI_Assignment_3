import { getNewsItem, getNewsids } from './getnewsdata.js';
export const NewsContent = async () => {
    const data = await getNewsids();
    const getNewsItemPromiseArr = data.map(item => getNewsItem(item))
    const itemsObject = await Promise.all(getNewsItemPromiseArr);   
    return itemsObject
}