import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"

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
  
`
const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
          <Filter>
            Filter 1
          </Filter>
          <Filter>
            Filter 2
          </Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList