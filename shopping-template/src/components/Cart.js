import React from 'react'
import "./Cart.css";

const Cart = ({ cartItems, onAdd }) => {
  return (
    <div className="cart">
        <h2>Your Shopping Cart</h2>
        <div className="cart-container">
          <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
              {cartItems.map((item)=>(
                <div key={item.id} className="product-row">
                  <div>{item.name}</div>
                  <div>
                    <button onClick={() => onAdd(item)}>
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Cart