import Item from './Item';
const ItemList=({items})=>{
    // items.map(item=><Item item={item} key={item.id}/>   
    return(
      <>
        {
        items.length>0
        ?
            items.map(item=><Item item={item} key={item.id}/>)
            :<div className="Cargando">Cargando...</div> 
        }
      </>
        )
}
export default ItemList;