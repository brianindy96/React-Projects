import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
        {
            popularProducts.map((product)=>(
                <Product key={product.id} product={product} />
            ))
        }
    </Container>
  )
}

export default Products