import { createContext, useState } from "react";
export const CartContext = createContext();
const CartContextProvider =({children}) =>{
    const [cartList,setCartList]=useState([])
    const addToCart =(item,qty)=>{
    const found = cartList.find(element => element.id==item.id);
    if(found){
        found.qty+=qty;
        setCartList([...cartList])
    }
        else{ 
            setCartList([
            ...cartList,
            {
                key:item.id,
                id:item.id,
                name:item.name,
                price:item.price,
                qty:qty,
                imgId:item.imgId,
                totalPrice:item.price*qty,
                onSale:item.onSale
            }]);
        }
       
   }
   const removeAll =()=>{
    setCartList([]);
    }

    const removeItem = (id) => {
        let newCartList = cartList.filter(element => element.id != id);
        setCartList(newCartList);
    }
    
    return(
        <CartContext.Provider value={{cartList,addToCart,removeAll,removeItem}}>
            {children}
        </CartContext.Provider>
    );
    
}
export default CartContextProvider;