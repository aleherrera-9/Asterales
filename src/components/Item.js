const Item =({name,image,position})=>{
   if(position==2){
    return(
        <>
      <div className="d-flex bd-highlight m-4">
         <div className="p-2 w-100 bd-highlight text-center">
            <h3>{name}</h3><br/>
            <button type="button" className=" m-5 btn btn-outline-secondary">Cotizar Seguro</button>
         </div>
         <div className="p-2 flex-shrink-1 bd-highlight"><img src={image}/></div>
      </div>
        </>
     )
   }
   else{
    return(
        <>
      <div className="d-flex bd-highlight m-4">
         <div className="p-2 flex-shrink-1 bd-highlight"><img src={image}/></div>
         <div className="p-2 w-100 bd-highlight text-center">
            <h3>{name}</h3>
            <br/>
            <button type="button" className="btn btn-outline-secondary m-5">Cotizar Seguro</button>
         </div>        
      </div>
        </>
     )
   }
}
export default Item;