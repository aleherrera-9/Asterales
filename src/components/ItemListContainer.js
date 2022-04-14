import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import ProductPromise from "../tools/ProductPromise";
import Data from '../tools/products.json';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [allData, setDatos] = useState([]);
    const {idCategory}= useParams();
    useEffect(() => {
        if(idCategory == undefined){
            ProductPromise(3000,Data)
                .then(result=>setDatos(result))
                .catch(err=>console.log(err))
        }else{
            ProductPromise(1500,Data.filter(item=> item.productId === idCategory))
            .then(result=>setDatos(result))
            .catch(err=>console.log(err))
        }
    },[idCategory]);
    return(
    <>
    <div className="ItemListContainer">
        <div className="text-center">
        <ItemList items={allData}/>
        </div>
    </div>
    </>
    );
}
export default ItemListContainer;