import image from '../images/logo.png';
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";
import { useContext } from "react";
import CartWidget from './CartWidget';
import Nav from 'react-bootstrap/Nav';
import { NavItem } from '../tools/styledComponents';

const Navbar = () => {

    const test = useContext(CartContext);

    return (
        <>
        
            <div className="text-center sticky-top bg-nav">
                <Link to='/'><img className="nav-imagen" alt =""src={image} /></Link>
                <Nav className="justify-content-center p-3">
                    <Nav.Item>
                        <NavItem to='/NewIn'>Novedades</NavItem>
                    </Nav.Item>
                    <Nav.Item>
                        <NavItem to='/Camisas&Blusas'>Camisas & Blusas</NavItem>
                    </Nav.Item>
                    <Nav.Item>
                        <NavItem to='/Camperas&Sweaters'>Camperas & Sweaters</NavItem>
                    </Nav.Item>
                    <Nav.Item>
                        <NavItem to='/outlet' className='text-danger'>Sale</NavItem>
                    </Nav.Item>
                    <Nav.Item>
                        {test.cartList.length > 0 && (
                            <CartWidget />
                        )}
                    </Nav.Item>
                </Nav>
                
            </div>
            
</>
    )
}
export default Navbar;