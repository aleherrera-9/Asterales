import{useState} from "react";
const ItemCount = (props) =>{
    const [rate, setRate]= useState(props.initial);
    const increment = () =>{
        if(rate<props.stock){
            setRate(rate+1);}
        }
    const decrease = () =>{
        if(rate>props.initial){
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
            </div>
           </>
        );
     
}
export default ItemCount;