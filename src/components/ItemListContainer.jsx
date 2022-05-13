import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { fetchFirestore } from "../tools/firestoreInfo";
import { useParams } from "react-router-dom";
import{ILContainer} from "../tools/styledComponents";

const ItemListContainer = () => {
    const [allData, setDatos] = useState([]);
    const {idCategory}= useParams();

    useEffect(()=>{
       fetchFirestore(idCategory)
       .then(result=>setDatos(result))
       .catch(error=>console.log(error))
    },[idCategory]);
    
    return(
    <ILContainer>
        <ItemList items={allData}/>
    </ILContainer>
    );
}
export default ItemListContainer;