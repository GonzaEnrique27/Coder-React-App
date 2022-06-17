import React from 'react'
import "./Cart.css"
import { useCartContext } from "../../Context/CartContext"

export const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()
  return (
    
    
    <section className="carrito2">
        {
          cart.map((items) =>(
          
            <div className="product">
                <div key = {items.id} className="section1">
                    <img src={items.img} alt="imagen"/>
                    <h2>Producto</h2>
                    
                    <p>Cantidad: {items.cantidad}</p>
                    <p className="price">{items.price * items.cantidad}</p>
                </div>
                <div className="section2">
                    <p>Descripción breve del producto</p>
                    <button onClick={() => removeItem(items.id)} className='btn-eliminar'>Eliminar</button>
                </div>
                <h4> TOTAL: ${totalPrice()} </h4>
                <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                </div>
                
                
                ))
        }

                <div className="btn" >
                    <a href="/"> 
                    <button className="btn-style" >Seguir Comprando</button>
                    </a>
                    <button className="btn-style">Finalizar Compra</button>
                </div>
                </section>
        
  )
}
