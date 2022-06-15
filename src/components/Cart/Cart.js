import React from 'react'
import "./Cart.css"
import {Counter} from "../Counter/Counter"

export const Cart = () => {
  return (
    <section className="carrito2">
            <div className="product">
                <div className="section1">
                    <img src="./img/products/guitar1.png" alt="imagen"/>
                    <h2>Producto</h2>
                    
                    <Counter/>
                    <p className="price">200</p>
                </div>
                <div className="section2">
                    <p>Descripción breve del producto</p>
                    <button className='btn-eliminar'>eliminar</button>
                </div>
          
            </div>
            <div className="product">
                <div className="section1">
                    <img src="./img/products/stratocaster.png" alt="imagen"/>
                    <h2>Producto</h2>
                    
                    <Counter/>
                    <p className="price">200</p>
                </div>
                <div className="section2">
                    <p>Descripción breve del producto</p>
                    <button className='btn-eliminar'>eliminar</button>
                </div>

            </div>

                <div className="btn" >
                    <a href="/"> 
                    <button className="btn-style" >Seguir Comprando</button>
                    </a>
                    <button className="btn-style">Finalizar Compra</button>
                </div>
        </section>
  )
}
