import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Row, Container, Col, Carousel } from 'react-bootstrap';
import Swal from "sweetalert2";
import { DecorationLine, InfoItem, InfoItemName, Button, StyledLink, InfoMesage } from '../tools/styledComponents';

const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    Swal.fire({
      position: 'top-end',
      imageUrl: item.imgId,
      imageHeight: 150,
      imageWidth: 120,
      imageAlt: 'A tall image',
      showConfirmButton: false,
      title: ``,
      text: `${item.name} Agregado al carrito`,
      timer: 2000
    })
    setItemCount(qty);
    test.addToCart(item, qty);
  }

  return (
    
    <Container className="fadeIn">
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
          {item.productId === 'outlet'
            ? <InfoItemName className="price-outlet">-25% off<p >${item.price}</p><p>Precio : ${item.price - ((item.price / 100) * 25)}</p></InfoItemName>
            : <InfoItemName>Precio : ${item.price}</InfoItemName>
          }
          {item.stock > 0 
           ? 
              <>
                <DecorationLine />
                {
                  itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} price={item.price} item={item} />
                    : <>
                      {itemCount !==item.stock &&(<InfoItem>Quedan : {item.stock-itemCount} prendas</InfoItem>)}
                      <Button ><StyledLink to='/' className="shadow" >Seguir Comprando</StyledLink></Button>
                      <Button ><StyledLink to='/Cart' className="shadow" >Ver carrito</StyledLink></Button>
                    </>

                }
              </>
            :<InfoItem className="text-danger">sin stock</InfoItem>
          }

        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail;