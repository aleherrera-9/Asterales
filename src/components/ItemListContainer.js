
import {AiTwotoneTool} from "react-icons/ai";
import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import ProductPromise from "../tools/ProductPromise";
import Data from '../tools/products.json';

const ItemListContainer = ({greeting}) => {
    const [allData, setDatos] = useState([]);
    useEffect(() => {
        ProductPromise(2000,Data)
        .then(result=>setDatos(result))
        .catch(err=>console.log(err))
    },[]);
    return(
    <>
    <div className="ItemListContainer">
        <p className="text-center fs-5 m-5">{greeting} <AiTwotoneTool/></p>
        <div className="text-center">
        <ItemList items={allData}/>
        </div>
    </div>
    </>
    );
}
export default ItemListContainer;