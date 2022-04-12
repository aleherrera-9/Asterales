import CartWidget from './CartWidget';
import image from '../images/logo.png';
const Navbar = () => {
    return (
        <>
        <div className="text-center">
        <img className="nav-imagen"src={image}/>
        </div>
        <div className="navBackground">
            <CartWidget/>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" >AW22</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">PRENDAS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">NEW IN</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">OUTLET</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">ACCESORIOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disable" href="#">Contacto</a>
                </li>
            </ul>
        </div>
        </>
        
    );
}
export default Navbar;