import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Form from 'react-bootstrap/Form';
import { Row, Container, Col, Carousel } from 'react-bootstrap';
import { DecorationLine, InfoItem, InfoItemName,Button,StyledLink } from '../tools/styledComponents';
const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);
  const onAdd = (qty) => {
    setItemCount(qty);
    test.addToCart(item, qty);
  }
  return (
    <Container>
      <Row className="text-center p-4">
        <Col className="p-4">
          <Carousel className="text-center">
            <Carousel.Item><img className="d-block w-100" alt="First slide" src={item.imgId} /></Carousel.Item>
            <Carousel.Item><img className="d-block w-100" alt="Second slide" src={item.imgId1} /></Carousel.Item>
            <Carousel.Item><img className="d-block w-100" alt="Second slide" src={item.imgId2} /></Carousel.Item>
            <Carousel.Item><img className="d-block w-100" alt="Second slide" src={item.imgId3} /></Carousel.Item>
          </Carousel>
        </Col>
        <Col className="p-4">
          <InfoItemName>{item.name}</InfoItemName>
          <DecorationLine />
          <InfoItem>{item.description}</InfoItem>
          <InfoItem>{item.desc2}</InfoItem>
          <DecorationLine />
          <InfoItemName>Precio : {item.price}</InfoItemName>
          <Form.Select aria-label="Default select example">
            <option value="0">Elegir una opción...</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="3">XL</option>
          </Form.Select>
          <DecorationLine />
          {
            itemCount === 0
              ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} price={item.price} />
              : <Button ><StyledLink to='/Cart' >Ver carrito</StyledLink></Button>

          }
        </Col>
      </Row>
    </Container>
  )
}
export default ItemDetail;