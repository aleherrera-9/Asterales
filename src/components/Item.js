import { Link } from "react-router-dom";
const Item =({item})=>{
   return(
  <>
  {item?
      <Link to={`/${item.productId}/${item.id}`} className="LinkRoute">
      <div className="d-inline-flex p-3 bd-highligh">
      <div className="text-center flex-item">
      <img src={item.imgId}/>
         <div className="m-4">
         <p>{item.name}</p>
         <p>{item.price}</p>
         <button type="button" className=" btn btn-outline-secondary">Comprar</button>
         </div>
      </div>
   </div>
</Link>
:<div className="Cargando">Cargando...</div>
  }
  </>
   )
}
export default Item;