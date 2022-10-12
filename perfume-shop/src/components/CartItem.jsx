import React from 'react'

const CartItem = ({ lineItem }) => {
  return (
    <div>
        <div key={lineItem.id}>
            <div>{lineItem.name}</div>
            <div>{lineItem.image.url}</div>          
            Subtotal: {lineItem.subtotal.formatted_with_symbol}          
        </div>
    </div>
  )
}

export default CartItem