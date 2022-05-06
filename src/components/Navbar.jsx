import image from '../images/logo.png';
import { Link } from 'react-router-dom';
import  {CartContext}  from "./CartContext";
import { useContext } from "react";
import CartWidget from './CartWidget';
import {NavItem,Nav,DecorationLine} from '../tools/styledComponents';
const Navbar = () => {
    const test = useContext(CartContext);
    return (
        <>
        <div className="text-center">
        <Link to='/'><img className="nav-imagen"src={image}/></Link>
        </div>
        {test.cartList.length>0&&(
        <CartWidget></CartWidget>
        )}
        <Nav className='m-4' >
                <NavItem to='/NewIn'>Novedades</NavItem>
                <NavItem to='/Camisas&Blusas'>Camisas&Blusas</NavItem>
                <NavItem to='/Camperas&Sweaters'>Camperas&Sweaters</NavItem>
                <NavItem to='/outlet'>Sale</NavItem>
        </Nav>
        <DecorationLine/>
        </>
        
    );
}
export default Navbar;