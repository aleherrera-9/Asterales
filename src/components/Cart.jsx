import { useContext } from "react";
import  {CartContext}  from "./CartContext";
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
const Cart = () =>{
let total=0;
const test = useContext(CartContext);
let descuento=0;
test.cartList.forEach(element => {
  if(element.onSale===true){
    total+=element.totalPrice-((element.totalPrice*25)/100)
    descuento+=(element.totalPrice*25)/100
  }else{
    total+=element.totalPrice
  }
  })
 
    return(
        <>
          {
          test.cartList.length===0&&(
            <div className="text-center m-4">
            <p>carrito vacio</p>
            <Link to='/' className="cartButton LinkRoute text-white p-2">Volver a la tienda</Link>
            </div>
          )           
          
        }
        {test.cartList.length>0&&(   
            
       <div className="text-center p-4">
           <div className="container">
             <div className="row">
             <div className="col-8">
              <table className="table">
                <thead>
                    <tr key={26}>
                    <th scope="col"></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {test.cartList.map(item=>
                        <>
                        <tr key={item.id}>
                        <td><img width="150px" height={"200px"} src={item.imgId}/></td>
                        <td><strong><p>{item.name}</p></strong></td>
                        <td><strong><p>{item.price}</p></strong></td>
                        <td><strong>{item.qty}</strong></td>
                        <td>{
                          item.onSale===true
                          ?item.totalPrice-((item.totalPrice*25)/100)
                          :item.totalPrice
                          }</td>
                        <td><DeleteOutlineIcon className="LinkRoute text-dark" onClick={() => test.removeItem(item.id)}></DeleteOutlineIcon></td>
                        </tr>
                        </>
                )
                }
                </tbody>
              </table>
             </div>
            <div className="col-4 ">
              <div width='18rem'>
                  <div className="card-body">
                  <table className="table table-borderless">
                    <tbody>
                        <tr>
                        <td><p className="card-text">Subtotal</p></td> 
                        <td><p className="card-text">{total}</p></td> 
                        </tr>
                    </tbody>
                  </table>
                  {descuento>0&&(
                  <table className="table table-borderless">
                    <tbody>
                        <tr>
                        <td><p className="card-text">Descuento</p></td> 
                        <td><p className="card-text">-{descuento}</p></td> 
                        </tr>
                    </tbody>
                  </table>
                  )}
                    <hr />
                    <table className="table table-borderless">
                    <tbody>
                        <tr>
                        <th><p className="card-text">total</p></th> 
                        <th><p className="card-text">{total}</p></th> 
                        </tr>
                    </tbody>
                  </table>
                    <hr />
                    <button href="#" className="cartButtonMin2">finalizar compra</button>
                  </div>
              </div>
            </div>
             </div>
           </div>
         
         
         <button onClick={test.removeAll} className="cartButtonMin">vaciar carrito</button>
          <button className="cartButtonMin"><Link to='/'className="cartButtonMin LinkRoute text-white">ir a la tienda</Link></button>
       </div>
      
        )
        }
        </>
    )
}
export default Cart;