import React from 'react'
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
        <h2>Your Shopping Cart</h2>
        <div className="cart-container">
          {cartItems.length === 0 ? 
            <div>Cart is Empty</div> 
          : 
            <div>

            </div>
          }
        </div>
    </div>
  )
}

export default Cart