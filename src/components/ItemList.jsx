import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';

const ItemList=({items})=>{
  
    return(
      <>
        {
        items.length>0
        ?
            items.map(item=><Item item={item} key={item.id}/>)
            :<Spinner animation="border" role="status" className='m-4'>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      </>
        )
}
export default ItemList;