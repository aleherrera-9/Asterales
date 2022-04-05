import Item from './Item';
const ItemList=({items})=>{
    
    return(
        items.map(item=><Item name={item.name} key={item.id} image={item.imgId} position={item.position}/>
        )
        
    )
}
export default ItemList;