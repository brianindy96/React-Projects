import React from 'react'
import styled from "styled-components"
import Product from './Product'


const products = [
    {
        id: 1,
        name: "Shoes",
        description: "running shoes",
        price: 30.00
    },
    {
        id: 2,
        name: "Shirt",
        description: "normal shirt",
        price: 15.00
    },
]

const Container = styled.div`
    
`
const Products = () => {
  return (
    <Container>
        {products.map((product)=>(
          <Product key={product.id} product={product} />
        ))}
    </Container>
  )
}

export default Products