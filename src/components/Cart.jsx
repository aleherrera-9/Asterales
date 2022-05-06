import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import db from "../tools/fireBaseConfig";
import { doc, setDoc, serverTimestamp, collection, } from "firebase/firestore";
import {Button,ButtonMin,StyledLink} from "../tools/styledComponents";
const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    const listforDB = test.cartList.map(item => ({
      id: item.id,
      tittle: item.name,
      price: item.price,
    }));

    let order = {
      buyer: {
        name: 'olivia',
        email: 'olvia@gmail.com',
        phoner: '1565898984'
      },

      total: test.calcTotal()-test.calcDescuento(),
      date: serverTimestamp(),
      items: listforDB
    };

    console.log(order);

    const newOrderFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }

    newOrderFirestore()
      .then(result => alert("new order created ID:" + result.id))
      .catch(error => console.log(error));

    test.removeAll();
  }
  return (
    <>
      {
        test.cartList.length === 0 && (
          <div className="text-center m-4">
            <p>carrito vacio</p>
            <Link to='/' className="cartButton LinkRoute text-white p-2">Volver a la tienda</Link>
          </div>
        )

      }
      {test.cartList.length > 0 && (

        <div className="text-center p-4">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <table className="table">
                  <thead>
                    <tr key={26}>
                      <th scope="col" ></th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {test.cartList.map(item =>
                      <>
                        <tr key={item.idItem}>
                          <td><img width="150px" height={"200px"} src={item.imgId} /></td>
                          <td><strong><p>{item.name}</p></strong></td>
                          <td><strong><p>{item.price}</p></strong></td>
                          <td><strong>{item.qty}</strong></td>
                          <td>{
                            item.onSale === true
                              ? item.totalPrice - ((item.totalPrice * 25) / 100)
                              : item.totalPrice
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
                          <td><p className="card-text">{test.calcTotal()}</p></td>
                        </tr>
                      </tbody>
                    </table>
                    {test.calcDescuento() > 0 && (
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td><p className="card-text">Descuento</p></td>
                            <td><p className="card-text">{test.calcDescuento()}</p></td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                    <hr />
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th><p className="card-text">total</p></th>
                          <th><p className="card-text">{test.calcTotal()-test.calcDescuento()}</p></th>
                        </tr>
                      </tbody>
                    </table>
                    <hr />
                    <ButtonMin><StyledLink to='/' onClick={createOrder}>Comprar</StyledLink></ButtonMin>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <Button onClick={() => test.removeAll()} >vaciar carrito</Button>
          <Button ><StyledLink to='/'>ir a la tienda</StyledLink></Button>
        </div>

      )
      }

    </>
  )
}

export default Cart;