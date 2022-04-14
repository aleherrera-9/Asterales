import Data from '../tools/products.json';
import ItemDetail from '../components/ItemDetail';
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import ProductPromise from '../tools/ProductPromise';
const ItemDetailContainer = () => {   
    const [item,setItem] = useState([])
    const {itemId}= useParams();
    useEffect(()=>{
        ProductPromise(500,Data.find(item=>item.id === parseInt(itemId)))
          .then(res =>setItem(res))
          .catch(err=>console.log(err))
      },[])
    return(
       <ItemDetail item={item} key={item.id}/>
    )
}
export default ItemDetailContainer;
