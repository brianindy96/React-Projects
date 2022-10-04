import React from 'react'
import "./Cart.css";

const Cart = ({ cartItems, onAdd, onRemove }) => {

  const itemPrices = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrices * 0.07;
  const shippingPrice = itemPrices > 400 ? 0 : 50;
  const totalPrice = itemPrices + taxPrice + shippingPrice;

  return (
    <div className="cart">
        <h2>Your Shopping Cart</h2>
        <div className="cart-container">
          <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
              {cartItems.map((item)=>(
                <div key={item.id} className="product-row">
                  <div><strong>{item.name}</strong></div>
                  <div>
                    <button onClick={() => onAdd(item)}>
                      +
                    </button>
                    <button onClick={() => onRemove(item)}>
                      -
                    </button>
                  </div>
                  <div>
                    {item.qty} x {item.price.toFixed(2)} pln
                  </div>
                </div>
              ))}
              --------------------------------------------
              <div className="cart-summary">
                  {cartItems.length !== 0 &&(
                    <>
                    <div>
                    <div><strong>Item Price</strong></div>
                      <div>{itemPrices.toFixed(2)}pln</div>
                    </div>
                    <div>
                    <div><strong>Tax Price</strong></div>
                      <div>{taxPrice.toFixed(2)}pln</div>
                    </div>
                    <div>
                      <div><strong>Shipping Price</strong></div>
                      <div>{shippingPrice.toFixed(2)}pln</div>
                  </div>
                  
                  <div>
                    <div><strong>Total Price</strong></div>
                    <div>{totalPrice.toFixed(2)}pln</div>
                  </div>
                    </>
                  )}
              </div>
            </div>
    </div>
  )
}

export default Cart