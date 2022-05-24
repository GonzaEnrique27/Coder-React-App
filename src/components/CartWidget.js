import React from 'react'
import { BsCartPlus } from 'react-icons/bs'

export const CartWidget = () => {
  return (
    <div className='icon-container'>
    <div className="cart" title="cart" target="_blank"><BsCartPlus/>
    <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">5</span>
  </div>
  </div>
  )
}
