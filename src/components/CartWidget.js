import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const CartWidget= () => {
    return(
       
        <div className="text-white fs-5 text-end">
             <ul className="nav justify-content-end m-5">
                <li className="nav-item p-4">
                <Link to='/'><FaRegUser/></Link>
                </li>
                <li className="nav-item p-4">
                <Link to='/Cart'>5 <BsCart3 /></Link>
                </li>
           </ul> 
         
        </div>
    )
}
export default CartWidget;