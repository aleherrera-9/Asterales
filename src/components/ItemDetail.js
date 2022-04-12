import ItemCount from "./ItemCount";
const ItemDetail=({item})=>{
  return(
    <div className="container text-center p-4">
      <div className="row ">
      <div class="col-1"><img src={item.imgId2}/>   </div>
        <div className="col-6"> <img src={item.imgId}/></div>
        <div className="col-4 m-1 text-center">
          <h3 className="m-3">{item.name}</h3> <hr/>
           <div className="p-5">
          <hr/> <p className="m-1 fs-5">{item.description}<br/>{item.desc2}<br/>{item.desc3}
             </p> <hr/>
          </div>
          <p className="fs-4">Precio : {item.price}</p>
          
          <p>Colores:</p>
          <button type="button" className="border border-dark optionBeige m-1"> ㅤㅤ</button>
          <button type="button" className="border border-dark optionBlack m-1"> ㅤㅤ</button>
          <button type="button" className="border border-dark optionWhite m-1"> ㅤㅤ</button>
         
          <select className="form-select m-3" aria-label="Default select example">
            <option value="0">Elegir una opción...</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="3">XL</option>
          </select>
          <ItemCount stock={item.stock}initial={1}/>
          <p>Stock: {item.stock}</p>
          <button type="button" className="btn m-1">Comprar</button>
        </div>
      </div>
  </div>
      
  );
}
export default ItemDetail;