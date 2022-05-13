
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import { BsHandbagFill } from 'react-icons/bs'
import { AddButtonWidget, ModalInfo, ImgCart } from "../tools/styledComponents";
import Modal from 'react-bootstrap/Modal';
import { FaTrash } from 'react-icons/fa';
import { Container, Row, Col } from "react-bootstrap";
const CartWidget = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let finalQty = 0;
    const test = useContext(CartContext);
    if (test.cartList.length > 0) {
        return (
            <>
                {test.cartList.forEach(element => finalQty += element.qty)}
                <a href="#" onClick={handleShow}><BsHandbagFill /><span>{finalQty}</span></a>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <ModalInfo>{finalQty} articulos en el carrito</ModalInfo>
                    <Container>
                        <ModalInfo>
                            <Row>
                                <Col> Subtotal: <p className="card-text">{test.calcTotal() - test.calcDescuento()}</p></Col>
                                <Col><AddButtonWidget to='/Cart' onClick={handleClose}>Editar carrito</AddButtonWidget></Col>
                            </Row>
                        </ModalInfo>
                    </Container>
                    <Container>
                        {test.cartList.map((item) => {
                            return (
                                <ModalInfo key={item.id}>
                                    <Row>
                                        <Col> <ImgCart src={item.imgId}></ImgCart></Col>
                                        <Col> {item.name} <br /> <p className="p-1">Cantidad : {item.qty}</p>
                                        </Col>
                                        <Col> <FaTrash onClick={() => test.removeItem(item.id)}></FaTrash></Col>
                                    </Row>
                                </ModalInfo>

                            )
                        })}
                    </Container>
                    <AddButtonWidget to='/Payment' className="m-2 text-center" onClick={handleClose}>Completar la compra</AddButtonWidget>
                    <ModalInfo className="text-end" > <button onClick={() => test.removeAll()}>vaciar carrito</button></ModalInfo>
                </Modal>
            </>

        )
    }

}
export default CartWidget;