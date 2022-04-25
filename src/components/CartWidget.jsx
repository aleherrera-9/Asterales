import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget= () => {
    let finalQty=0;
    const test= useContext(CartContext);
    return(
        <>
        {test.cartList.forEach(element =>finalQty+=element.qty) }
        <div className="text-end m-5 fs-3">
        <Link to='/Cart' className="LinkRoute text-dark"><BsCart3/></Link> <span>{finalQty}</span>
        </div>
        </>
    )
}
export default CartWidget;