import React from 'react'
import CartItem from './CartItem'
import styled from 'styled-components'


const EmptyCartMSG = styled.p`
    
`
const Cart = ({ cart }) => {

    const handleEmptyCart = () => {
        onEmptyCart();
    }

const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
        return;
   }

   return (
    <EmptyCartMSG>
        You have no items in your shopping cart, start adding some!
    </EmptyCartMSG>
   )
}

const renderItems = () => (
    cart.line_items.map((lineItem) => (
      <CartItem
        item={lineItem}
        key={lineItem.id}
        className="cart__inner"
      />
    ))
  );

  const renderTotal = () => (
    <div className="cart__total">
      <p className="cart__total-title">Subtotal:</p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
  );

  return (
    <Container>
        <CartHeading>Your Shopping Cart</CartHeading>
        {renderEmptyMessage()}
        {renderItems()}
        {renderTotal()}
        <CartFooter>
            <EmptyBtn>Empty Cart</EmptyBtn>
            <CheckOutBtn>Checkout</CheckOutBtn>
        </CartFooter>
    </Container>
  )
}

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => {},
};

export default Cart