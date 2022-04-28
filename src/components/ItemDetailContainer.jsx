import Data from '../tools/products.json';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchFirestoreItemDetail } from '../tools/firestoreInfo';
const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const { itemId } = useParams();
  useEffect(() => {
    fetchFirestoreItemDetail(itemId)
      .then(result => setItem(result))
      .catch(error => console.log(error))
  },[])

  return (
    <ItemDetail item={item} key={item.id} />
  )
}
export default ItemDetailContainer;
