import React from 'react'
import styled from "styled-components"
import Product from './Product'

const products = [
  {
    id: 1,
    img: "",
    name: "armani",
    desc: "",
  },
  {
    id: 2,
    img: "",
    name: "versace",
    desc: "",
  },
  {
    id: 3,
    img: "",
    name: "dior",
    desc: "",
  },
  {
    id: 4,
    img: "",
    name: "chanel",
    desc: "",
  },
  {
    id: 5,
    img: "",
    name: "aventus creed",
    desc: "",
  },
  {
    id: 6,
    img: "",
    name: "mont blanc",
    desc: "",
  },
  {
    id: 7,
    img: "",
    name: "byredo",
    desc: "",
  },
  {
    id: 8,
    img: "",
    name: "tom ford",
    desc: "",
  },
]
const Container = styled.div`
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
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 50px;
`
const Products = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Products</Title>
            <CardContainer>
              {products.map((product)=>(
                <Product key={product.id} product={product}/>
              ))}
            </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Products