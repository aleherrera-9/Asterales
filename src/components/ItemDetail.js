import ItemCount from "./ItemCount";
const ItemDetail=({item})=>{

  return(
      <div className="container text-center p-4">
      <div className="row ">
        <div className="col-sm"> <img src={item.imgId}/></div>
        <div className="col-sm m-1 text-center">
          <h3 className="m-3">{item.name}</h3> <hr/>
           <div className="p-5">
          <hr/> <p className="m-1 fs-5">{item.description}<br/>{item.desc2}</p> <hr/>
          </div>
          <p className="fs-4">Precio : {item.price}</p>


          <p>Colores:</p>
          <button type="button" className="border border-dark optionBlack m-1"> ㅤㅤ</button>
          <button type="button" className="border border-dark optionWhite m-1"> ㅤㅤ</button>
         
          <select className="form-select m-3" aria-label="Default select example">
            <option value="0">Elegir una opción...</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="3">XL</option>
          </select>
          <ItemCount stock={item.stock} initial={1}/>
          <br/>
          <button type="button" className="btn m-1" >Comprar</button>
        </div>
      </div>
      </div>
  )
}
export default ItemDetail;