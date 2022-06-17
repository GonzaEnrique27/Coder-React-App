import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useCartContext } from '../../Context/CartContext'

export const CartWidget = () => {

  const {totalQuantity} = useCartContext()
  
  return (
    <div className='icon-container'>
    <div className="cart" title="cart" target="_blank"><BsCartPlus/>
    <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{totalQuantity()}</span>
  </div>
  </div>
  )
}
