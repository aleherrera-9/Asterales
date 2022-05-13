import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    
    const emptyCart = () =>{
        return(
            
            Swal.fire({
              position: 'center',
              showConfirmButton: false,
              title: ``,
              text:'Carrito Vacio',
              timer: 1000
                })
    )
    }

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        const found = cartList.find(element => element.id === item.id);
        if (found) {
            found.qty += qty;
            found.totalPrice = found.qty * item.price;
            setCartList([...cartList])
        }
        else {
            setCartList([
                ...cartList,
                {
                    key: item.id,
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    qty: qty,
                    imgId: item.imgId2,
                    totalPrice: item.price * qty,
                    onSale: item.onSale
                }]);
        }
    }
    const removeAll = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let newCartList = cartList.filter(element => element.id !== id);
        setCartList(newCartList);
        if(newCartList.length===0){
            emptyCart()
        }
    }
    const calcTotal = () => {
        let total = 0;
        if (cartList) {
            cartList.forEach(element =>
                total += element.totalPrice
            )
            return total
        }

    }
    const calcDescuento = () => {
        let totalDesc = 0;
        cartList.forEach(element => {
            if (element.onSale === true) {
                const total = element.price * element.qty;
                totalDesc += ((total * 25) / 100);
            }
        });
        return totalDesc;
    }
    return (
        <CartContext.Provider value={{ cartList, addToCart, removeAll, removeItem, calcTotal, calcDescuento }}>
            {children}
        </CartContext.Provider>
    );

}
export default CartContextProvider;