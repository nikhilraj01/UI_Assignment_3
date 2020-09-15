import React, {useState, useEffect} from "react"
import { NewsContent} from './getnewscontent'
import { Newsitem } from './newsitem.js'
const ItemsContainer = (props) => {

  const [itemsObject, setItemsObject] = useState([]);

  useEffect(() => {
    NewsContent().then(data => setItemsObject(data))
  }, []);
  
  const getItems = () => {
    let newsComponents=[]
    if(props.Type==="date"){
      itemsObject.sort((a, b) => b.date - a.date);
    }
    if(props.Type==="popularity"){
      itemsObject.sort((a, b) => b.score - a.score);
    }
    for(let i=0; i<itemsObject.length; i++){
      if(props.Content==="all"){
      if(itemsObject[i]!==undefined && itemsObject[i].title.includes(props.Search)){
      newsComponents.push(<Newsitem key={i} item={itemsObject[i]} />)
    }}
    else{
      if(itemsObject[i]!==undefined && itemsObject[i].title.includes(props.Search) && itemsObject[i].type===props.Content){
        newsComponents.push(<Newsitem key={i} item={itemsObject[i]} />)
    }
  }}    
    return newsComponents
  }

  return (
    <div>
     <div>{getItems()}</div>
  </div>
  )
};
export default ItemsContainer