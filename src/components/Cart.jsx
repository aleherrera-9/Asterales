import { useContext } from "react";
import  {CartContext}  from "./CartContext";
import { Link } from 'react-router-dom';
const Cart = () =>{
const test = useContext(CartContext);

    return(
        <>
          {
          test.cartList.length==0&&(
            <div className="text-center m-4">
            <p>carrito vacio</p>
            <Link to='/' className="cartButton LinkRoute text-white p-2">Volver a la tienda</Link>
            </div>
          )           
          
        }
        {test.cartList.length>0&&(   
            
       <div className="text-center">
           <h3 className="fs-4 text-center m-4">carrito</h3>
           <table className="table">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {test.cartList.map(item=>
                        <tr key={item.id}>
                        <td><img width="150px" height={"200px"} src={item.imgId}/></td>
                        <td><strong><p>{item.name}</p></strong></td>
                        <td><strong><p>{item.price}</p></strong></td>
                        <td><strong>{item.qty}</strong></td>
                        <td><button className="cartButtonMin" onClick={() => test.removeItem(item.id)}>eliminar</button></td>
                        </tr>
                )}
                </tbody>
            </table>
         
         <button onClick={test.removeAll} className="cartButtonMin">vaciar carrito</button>
          <button className="cartButtonMin"><Link to='/'className="cartButtonMin LinkRoute text-white">ir a la tienda</Link></button>
       </div>
      
        )
        }
        </>
    )
}
export default Cart;