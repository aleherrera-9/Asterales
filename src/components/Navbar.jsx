import CartWidget from './CartWidget';
import image from '../images/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
        <div className="text-center">
        <Link to='/'><img className="nav-imagen"src={image}/></Link>
        </div>
        <CartWidget/>
        <div className="navBackground Navbar">
            <ul className="nav justify-content-center m-4">
                <li className="nav-item">
                    <Link to='/aw22'>AW22</Link>
                </li>
                <li className="nav-item">
                    <Link to='/remeras'>REMERAS</Link>
                </li>
                <li className="nav-item">
                    <Link to='/sweaters'>SWEATERS</Link>
                </li>
                <li className="nav-item">
                    <Link to='/outlet'>OUTLET</Link>
                </li>
            </ul>
        </div>
        
        <div className="link-top"></div>
        </>
        
    );
}
export default Navbar;