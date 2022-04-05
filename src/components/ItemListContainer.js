import {AiTwotoneTool} from "react-icons/ai";
import { useEffect,useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ProductPromise from "../tools/ProductPromise";
import Data from '../tools/products.json';

const ItemListContainer = ({greeting}) => {
    const [allData, setDatos] = useState([]);
    useEffect(() => {
        ProductPromise((2000),Data)
        .then(result=>setDatos(result))
        .catch(err=>console.log(err))
    },[]);
    return(
    <>
    <div className="ItemListContainer">
        <p className="text-center fs-5 m-5">{greeting} <AiTwotoneTool/></p>
        <ItemList items={allData}/>
        <ItemCount stock={10}initial={1}/>
    </div>
    </>
    );
}
export default ItemListContainer;