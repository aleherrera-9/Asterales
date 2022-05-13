import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Row, Container, Col } from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import { Button, StyledLink, InfoCart, ImgCart, Order, DecorationLine,InfoItemName,InfoItem } from "../tools/styledComponents";

const Cart = () => {
  const test = useContext(CartContext);

  return (
    <>
      {
        test.cartList.length === 0 && (
            <InfoItemName className="p-5 m-4">
                <InfoItem>No tenes ningún artículo en tu carrito de compras</InfoItem>
               <StyledLink to='/' className="cartButton LinkRoute text-white p-2 fadeIn">Haga clic aquí para continuar comprando</StyledLink>
            </InfoItemName>
        )

      }
      {test.cartList.length > 0 && (
        <div className="text-center p-4 fadeIn">
          <Container >
            <Row>
              <Col>
                <table className="table">
                  <thead>
                    <tr>
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

                      <tr key={item.id + 5}>
                        <td><ImgCart src={item.imgId} /></td>
                        <td><InfoCart>{item.name}</InfoCart></td>
                        <td><InfoCart>{item.price}</InfoCart></td>
                        <td><InfoCart>{item.qty}</InfoCart></td>
                        <td>{
                          item.onSale === true
                            ? <InfoCart> {item.totalPrice - ((item.totalPrice * 25) / 100)}</InfoCart>
                            : <InfoCart>{item.totalPrice}</InfoCart>
                        }</td>
                        <td><InfoCart className='fs-5'><FaTrash onClick={() => test.removeItem(item.id)}></FaTrash></InfoCart></td>
                      </tr>
                    )
                    }
                  </tbody>
                </table>
              </Col>
              <Col>
                <Order>
                  <Container className="p-4">
                    <Row>
                      <DecorationLine></DecorationLine>
                      <Col className="m-4">
                        <p className="text-start">Subtotal </p>
                        {test.calcDescuento() > 0 && (<p className="text-start text-danger">Descuento 25% </p>)}
                        <p className="text-start">Total</p>
                      </Col>
                      <Col className="m-4">
                        <p className="text-end">{test.calcTotal()}</p>
                        {test.calcDescuento() > 0 && (<p className="text-end text-danger">-{test.calcDescuento()}</p>)}
                        <p className="text-end">{test.calcTotal() - test.calcDescuento()}</p>
                      </Col>
                      <DecorationLine></DecorationLine>
                      <StyledLink to='/Payment' >Comprar</StyledLink>
                    </Row>
                  </Container>
                </Order>
              </Col>
            </Row>
          </Container>
          <Button onClick={() => test.removeAll()}><StyledLink to='/'>vaciar carrito</StyledLink></Button>
          <Button ><StyledLink to='/'>volver a la tienda</StyledLink></Button>
        </div>

      )
      }

    </>
  )
}

export default Cart;