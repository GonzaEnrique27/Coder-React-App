import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {

      setCart( [...cart, item] )
    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
  
    const totalPrice = () => {
      return cart.reduce( (acc, item) => acc += (item.price * item.stock), 0)
    }
  
    const totalQuantity = () => {
      return cart.reduce( (acc, item) => acc += item.stock, 0 )
    }
  
    const emptyCart = () => {
      setCart( [] )
    }

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }

    return (
        <CartContext.Provider value={ 
            {
                cart, 
                addItem, 
                isInCart, 
                totalPrice,
                totalQuantity, 
                emptyCart,
                removeItem
            } 
        }>
            {children}
        </CartContext.Provider>
    )
}