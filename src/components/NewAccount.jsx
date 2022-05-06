import Form from 'react-bootstrap/Form';
import { Button } from '../tools/styledComponents';
const NewAccount = () => {
    return (
        
        <Form className="text-center m-5">
            <Form.Group className="mb-3  m-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
               
            </Form.Group>

            <Form.Group className="mb-3 m-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3  m-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Suscribirse al Newsletter" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default NewAccount;