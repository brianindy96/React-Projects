import React from 'react'
import styled from "styled-components"
import Product from './Product'


// const products = [
//     {
//         id: 1,
//         name: "Shoes",
//         description: "running shoes",
//         price: 30.00,
//         img: "/img/shoe.png"
//     },
//     {
//         id: 2,
//         name: "T-Shirt",
//         description: "normal t-shirt",
//         price: 15.00,
//         img: "/img/shirt.png"
//     },
//     {
//       id: 3,
//       name: "Shirt",
//       description: "normal shirt",
//       price: 25.00,
//       img: "https://www.tuttu.pl/pol_pl_Koszula-JWP-LS-SHIRT-MEN-37094_4.png"
//   },
// ]

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #eee;
    
`

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 50px;
`
const Products = ( {products, onAddToCart, cart}) => {
  return (
    <Container>
      <Wrapper>
        {products.map((product)=>(
          <Product 
          key={product.id} 
          product={product}
          onAddToCart={onAddToCart}
          cart={cart}
          />
        ))}
      </Wrapper>
        
    </Container>
  )
}

export default Products