import React, { useState, useEffect } from 'react'
import commerce from '../lib/commerce';
import styled from "styled-components"
import Product from './Product'
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import SingleProduct from '../pages/SingleProduct';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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


const Products = ({ onAddToCart }) => {

  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [sortBy, setSortBy] = useState('sort_order');


  const fetchProducts = async (name, order) => {
  // const products = await commerce.products.list(value);
     const products = await commerce.products.list({ sortBy: name, sortDirection: order});
  // const products = await commerce.products.list();

      setProducts(products.data);

}
  // sortOrder state

  const handleChange = (e) => {

    const a = e.target.value;
    const splitArray = a.split(",")
    console.log(splitArray);
    const first = splitArray[0];
    const second = splitArray[1];
    console.log(first);
    console.log(second);
    setSortBy(first);
    setSortOrder(second);
    // handleSort(first, second);
  }

  
  useEffect(() => {
    fetchProducts(sortBy, sortOrder);

  }, [sortOrder])

  
  

  return (
    <Container>
        <Wrapper>
            <Title id="products">Products</Title>
            <Filter>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Sort Price</InputLabel>
                <Select 
                label="Price"
                onChange={handleChange}
                displayEmpty
                >
                  <MenuItem value={"sort_by,"} label={'sort_by'}>Recommended</MenuItem>
                  <MenuItem value={"price,asc"} label={'price'}>Low-High</MenuItem>
                  <MenuItem value={"price,desc"} label={'price'}>High-Low</MenuItem>
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