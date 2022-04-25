import image from '../images/logo.png';
import { Link } from 'react-router-dom';
import  {CartContext}  from "./CartContext";
import { useContext } from "react";
import CartWidget from './CartWidget';
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
        <div className="navBackground Navbar sticky-top">
            <ul className="nav justify-content-center p-2 bg-white" >
                <li className="nav-item" key='7'>
                    <Link to='/aw22'>AW22</Link>
                </li>
                <li className="nav-item" key='8'>
                    <Link to='/remeras'>REMERAS</Link>
                </li>
                <li className="nav-item" key='9'>
                    <Link to='/sweaters'>SWEATERS</Link>
                </li>
                <li className="nav-item" key='10'>
                    <Link to='/outlet'>OUTLET</Link>
                </li>
            </ul>
        </div>
        
        <div className="link-top"></div>
        </>
        
    );
}
export default Navbar;