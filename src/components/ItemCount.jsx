import{useState} from "react";
import { Button, ListLi,InfoItemName,InfoItem, AddButton } from "../tools/styledComponents";
const ItemCount = ({stock,initial=0,onAdd,price,item}) =>{

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
            <InfoItemName >
            <ul className="list-group list-group-horizontal justify-content-center">
                <ListLi key='4'><Button type="button" onClick={increment}>+</Button></ListLi>
                <ListLi key='5'><p className="m-2 fs-5">{rate}</p></ListLi>
                <ListLi key='6'><Button type="button" onClick={decrease}>-</Button></ListLi>
            </ul>
            <br/>
            <InfoItem>Stock disponible {stock-rate}</InfoItem>
            {item.productId==='outlet'
            ?<InfoItem>Precio final: {rate*price-(((rate*price)*25)/100)}</InfoItem>
            :<InfoItem>Precio final: {rate*price}</InfoItem>
            }
            </InfoItemName>
            {
                stock!==0 && rate
                ? <AddButton className="cartButton text-center" variant="contained" color="primary" onClick={() => onAdd(rate)}>Add to Cart</AddButton>
                : <button className="cartButton text-center" variant="contained" disabled>Add to Cart</button>
            }
           </>
           
        );
     
}
export default ItemCount;