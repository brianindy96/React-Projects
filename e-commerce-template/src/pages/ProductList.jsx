import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`
    
`

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`
const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
`

const Select = styled.select`
  margin-right: 10px;
  padding: 10px;
`

const Option = styled.option`
  
`
const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Product:</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Product:</FilterText>
            <Select>
              <Option selected>Bestseller</Option>
              <Option>Newest</Option>
              <Option>Price (lowest to highest)</Option>
              <Option>Price (highest to lowest)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList