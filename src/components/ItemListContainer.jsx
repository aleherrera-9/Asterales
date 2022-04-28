import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { fetchFirestore } from "../tools/firestoreInfo";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [allData, setDatos] = useState([]);
    const {idCategory}= useParams();

    useEffect(()=>{
       fetchFirestore(idCategory)
       .then(result=>setDatos(result))
       .catch(error=>console.log(error))
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