import { useEffect,useState } from "react";
import ProductPromise from "../tools/ProductPromise";
import Data from '../tools/products.json';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => 
{
    const [oneProduct, setDatos] = useState([]);
    useEffect(() => {
        ProductPromise(2000,Data[2])
        .then(result=>setDatos(result))
        .catch(error=>console.log(error))
    },[]);
    return(
    <>
   <ItemDetail item={oneProduct}/>
    </>
    );
}
export default ItemDetailContainer;