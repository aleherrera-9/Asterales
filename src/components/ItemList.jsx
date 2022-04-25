import Item from './Item';
const ItemList=({items})=>{
  
    return(
      <>
        {
        items.length>0
        ?
            items.map(item=><Item item={item} key={item.id+1}/>)
            :<div className="Cargando">Cargando...</div> 
        }
      </>
        )
}
export default ItemList;