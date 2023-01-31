import React from 'react'
import styled from "styled-components"
import Product from './Product'
import PropTypes from 'prop-types';

const Container = styled.div`
    margin: 0 20px;
    min-height: 100vh;
    width: 100vw;
`
const Wrapper = styled.div`
    max-width: 1580px;
    margin: 0 auto;
`

const Title = styled.h2`
  margin-top: 20px;
`

const CardContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 50px;
`
const Products = ({ products, onAddToCart }) => {
  return (
    <Container>
        <Wrapper>
            <Title>Products</Title>
            <CardContainer>
              {products.map((product)=>(
                <Product 
                key={product.id} 
                product={product}
                onAddToCart={onAddToCart}
                />
              ))}
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products