import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
const CartWidget= () => {
    return(
        <div className="text-white fs-4 text-end m-3 ">
             <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" ><FaRegUser/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active bg black" aria-current="page" href="#" >5 <BsCart3 /></a>
                </li>
           </ul> 
         
        </div>
    )
}
export default CartWidget;