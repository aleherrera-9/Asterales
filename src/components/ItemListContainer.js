import {AiTwotoneTool} from "react-icons/ai"
import ItemCount from "./ItemCount"
const ItemListContainer = ({greeting}) => {
    return(
    <>
    <ItemCount 
    stock={10}
    initial={1}
    />
    <div className="ItemListContainer">
        <p className="text-center fs-5 m-5">{greeting} <AiTwotoneTool/></p>
    </div>
    </>
    );
}
export default ItemListContainer;