import{useState} from "react";
import Item from "./Item";
const ItemCount = ({stock,initial=0,onAdd,price}) =>{
    const [rate, setRate]= useState(initial);
    const increment = () =>{
        if(rate<stock){
            setRate(rate+1);}
        }
    const decrease = () =>{
        if(rate>initial){
            setRate(rate-1);}
    } 
        return (
           <>
            <div className="m-2">
            <ul className="list-group list-group-horizontal justify-content-center">
                <li className="list-group-item"><button type="button" className="btn " onClick={increment}>+</button></li>
                <li className="list-group-item"><p>{rate}</p></li>
                <li className="list-group-item"><button type="button" className="btn" onClick={decrease}>-</button></li>
            </ul>
            <br/>
            <p>Stock disponible {stock-rate}</p>
            <p>Precio final: {rate*price}</p>
            </div>
            {
                stock!=0 && rate
                ? <button className="cartButton text-center" variant="contained" color="primary" onClick={() => onAdd(rate)}>Add to Cart</button>
                : <button className="cartButton text-center" variant="contained" disabled>Add to Cart</button>
            }
           </>
           
        );
     
}
export default ItemCount;