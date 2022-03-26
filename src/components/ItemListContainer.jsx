import {AiTwotoneTool} from "react-icons/ai"
const ItemListContainer = ({greeting}) => {
    return(
    <div className="ItemListContainer">
        <p className="text-center fs-5 m-5">{greeting} <AiTwotoneTool/></p>
    </div>
    );
}
export default ItemListContainer;