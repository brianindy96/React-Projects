import React, { useState } from 'react'
import styled from "styled-components"
import Product from './Product'
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

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

const Filter = styled.div`
  width: 100%;
  justify-content: flex-end;
  display: flex;
  padding-right: 40px;
`

const SortFilter = styled.option`
  
`

const Sort = styled.select`
  
`
const Products = ({ products, onAddToCart }) => {

  // sortOrder state
  const [sortOrder, setSortOrder] = useState('');

  const handleChange = (e) => {

    e.preventDefault();
    setSortOrder(e.target.value);
  }
  return (
    <Container>
        <Wrapper>
            <Title>Products</Title>
            <Filter>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Sort Price</InputLabel>
                <Select 
                value={sortOrder} 
                label="Price"
                onChange={handleChange}
                >
                  {/* {console.log(sortOrder)} */}
                  <MenuItem value={"rec"}>Recommended</MenuItem>
                  <MenuItem value={"asc"}>Low-High</MenuItem>
                  <MenuItem value={"desc"}>High-Low</MenuItem>
                </Select>
              </FormControl>
            </Filter>
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