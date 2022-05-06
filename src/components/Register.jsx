import { BsGoogle } from 'react-icons/bs';
import { Row, Container, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { InfoItemName, InfoItem, Button,StyledLink } from '../tools/styledComponents';
const Register = () => {
    const handleEvent = (e) => {
        if (e.keyCode === 65 || e.keyCode === 69 || e.keyCode === 73 || e.keyCode === 79 || e.keyCode === 85) e.preventDefault();
        console.log(e.keyCode)
    }
    return (

        <Container>
            <Row className="text-center p-4">
                <Col className="p-4">
                    <InfoItemName className='fs-5 '>ingresar a asterales</InfoItemName>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10"className="m-1">
                                <Form.Control type="Email" placeholder="EMAIL@EXAMPLE.COM" onKeyDown={handleEvent}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10" className="m-1">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                    
                            <InfoItem>¿Olvidaste tu contraseña?</InfoItem>
                    
                    <div>
                        <Button>ingresar</Button>
                        <Button><BsGoogle /> ingresar con google</Button>
                    </div>
                </Col>
                <Col>
                    <InfoItemName>registrarse</InfoItemName>
                    <InfoItem>Una cuenta en la tienda online agiliza tus compras y te pone al día con tendencias y promociones.</InfoItem>
                    <br />
                    <Button ><StyledLink to='/newAccount' >Crear Cuenta</StyledLink></Button>
                    

                </Col>
            </Row>
        </Container>
    );
}
export default Register;