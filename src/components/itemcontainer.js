import React, {useState, useEffect} from "react"
import { NewsContent} from './getnewscontent'
import { Newsitem } from './newsitem.js'
const ItemsContainer = () => {

  const [itemsObject, setItemsObject] = useState([]);
  const [searchText, SetSearchText] = useState([]);

  useEffect(() => {
    NewsContent().then(data => setItemsObject(data))
  }, []);

  function handleChange(e){
    SetSearchText(e.target.value)
  }

  const getItems = () => {
    let newsComponents=[]
    for(let i=0; i<itemsObject.length; i++){
      if(itemsObject[i]!==undefined && itemsObject[i].title.includes(searchText)){
      newsComponents.push(<Newsitem key={i} item={itemsObject[i]} />)
    }
  }    
    return newsComponents
  }

  return (
    <div>
      <div>
        <input
        className="search"
         type="text"
         name="searchText"
         placeholder="Search stories by title, url or author"
         onChange={e=>handleChange(e)} 
         />
      </div>
     <div>{getItems()}</div>
  </div>
  )
};
export default ItemsContainer