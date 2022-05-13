import { CartContext } from "./CartContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { doc, setDoc, serverTimestamp, collection, increment, getFirestore, updateDoc } from "firebase/firestore";
import db from "../tools/fireBaseConfig";
import { InfoItem, ModalInfo, ImgCart, InfoPayment, DataPayment, Info, StyledLink, DecorationLine } from "../tools/styledComponents";
import { Container, Row, Col } from "react-bootstrap";

const Payment = () => {

    let finalQty = 0;

    const updateProducts = (element) => {
        const db = getFirestore();
        const productsDoc = doc(db, "products", element.id);
        updateDoc(productsDoc, { stock: increment(-element.qty) });
    }

    const test = useContext(CartContext);

    const createOrder = () => {
        test.cartList.forEach(element =>
            updateProducts(element)
        )
        const listforDB = test.cartList.map(item => ({
            id: item.id,
            tittle: item.name,
            price: item.price,
            qty: item.qty
        }));

        let order = {
            buyer: {
                name: 'user name',
                email: 'usermail@email.com',
                phoner: 'user number',
                dni: 'user ID',
                payment: '11111-2222-6666',
                cv: '568'
            },

            total: test.calcTotal() - test.calcDescuento(),
            date: serverTimestamp(),
            items: listforDB
        };

        const newOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        newOrderFirestore()
            .then(result => message(result.id))
            .catch(error => console.log(error));

        test.removeAll();
        const message = (id) => {
            Swal.fire(
                `Numero de orden: ${id}`,
                `Gracias por comprar en Asterales\n Recibiras un mail con el detalle de tu compra`,
            )
        }
    }
    if (test.cartList.length > 0) {
        return (
            <>
                {test.cartList.forEach(element => finalQty += element.qty)}
                <Container className="fadeIn">
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <InfoPayment>
                                        <Info>nombre*</Info><DataPayment><InfoItem>user name</InfoItem></DataPayment>
                                        <Info>direccion*</Info><DataPayment><InfoItem>user address</InfoItem></DataPayment>
                                        <Info>mail*</Info><DataPayment><InfoItem>user@email.com</InfoItem></DataPayment>
                                        <Info>numero*</Info><DataPayment><InfoItem>user number</InfoItem></DataPayment>
                                        <Info>dni*</Info><DataPayment><InfoItem>user ID</InfoItem></DataPayment>
                                        <ModalInfo>
                                            <Info>Numero de tarjeta*</Info><DataPayment><InfoItem>11111-2222-6666</InfoItem></DataPayment>
                                            <Info>fecha de vencimiento*</Info><DataPayment><InfoItem>05/12/26</InfoItem></DataPayment>
                                            <Info>cv*</Info><DataPayment><InfoItem>568</InfoItem></DataPayment>
                                        </ModalInfo>
                                    </InfoPayment>
                                </Row>
                            </Container>
                        </Col>

                        <Col>
                            <InfoItem>Resumen</InfoItem>
                            <InfoItem className="text-start">Articulos: {finalQty}</InfoItem>
                            {test.cartList.map((item) => {
                                return (
                                    <ModalInfo key={item.id}>
                                        <Row >
                                            <Col><ImgCart src={item.imgId}></ImgCart></Col>
                                            <Col><p>{item.name}<br />Cantidad : {item.qty}</p></Col>
                                            <Col><p>${item.price * item.qty}</p></Col>
                                        </Row>
                                    </ModalInfo>

                                )
                            })}
                            <Container className="p-4">
                                <Row>
                                    <DecorationLine></DecorationLine>
                                    <Col className="fs-6">
                                        <p className="text-start">Subtotal </p>
                                        {test.calcDescuento() > 0 && (<p className="text-start text-danger">Descuento 25% </p>)}
                                        <p className="text-start">Total</p>
                                    </Col>
                                    <Col className=" fs-6" >
                                        <p className="text-end">{test.calcTotal()}</p>
                                        {test.calcDescuento() > 0 && (<p className="text-end text-danger">-{test.calcDescuento()}</p>)}
                                        <p className="text-end">{test.calcTotal() - test.calcDescuento()}</p>
                                    </Col>
                                </Row>
                            </Container>
                            <InfoPayment className="text-end "> <StyledLink to='/Cart' className="bg-light text-dark" >Editar</StyledLink>  </InfoPayment>
                        </Col>

                    </Row>
                </Container>
                <InfoPayment className="text-center fs-3 shadow bg-dark"> <StyledLink to='/' onClick={createOrder}>Completar Compra</StyledLink> </InfoPayment>

            </>

        )
    }
    else {
        return (
            <InfoPayment className="text-center">
                <p>carrito vacio</p>
                <StyledLink to='/' className="text-center m-4 bg-dark" >Volver a la tienda</StyledLink>
            </InfoPayment>
        )
    }

}
export default Payment;