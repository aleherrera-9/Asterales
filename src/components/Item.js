import ItemCount from "./ItemCount";
const Item =({name,image})=>{
   return(
   
         <div className="d-inline-flex p-3 bd-highligh">
         <div className="text-center flex-item">
            <img src={image}/>
            <div className="m-4">
            <p>{name}</p>
             <ItemCount stock={10}initial={1}/>
            <button type="button" className=" btn btn-outline-secondary">Comprar</button>
            </div>
         </div>
      </div>
 
   )
}
export default Item;