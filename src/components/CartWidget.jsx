import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
const CartWidget= () => {
    return(
        <div className="text-white fs-4 text-end m-3">
            <FaRegUser/> |
            5 <BsCart3 />
        </div>
    )
}
export default CartWidget;