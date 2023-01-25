import React from 'react'
import styled from "styled-components"
import Product from './Product'

const products = [
  {
    id: 1,
    img: "/img/shoe.png",
    name: "armani",
    price: "$30.00",
    desc: "",
    rating: "4",
    reviews: "239"

  },
  {
    id: 2,
    img: "https://wypsikaj.pl/665-large_default/giorgio-armani-acqua-di-gioia-100ml-edp.jpg",
    name: "versace",
    price: "$30.00",
    desc: "",
    rating: "2",
    reviews: "512"
  },
  {
    id: 3,
    img: "https://cdn.scentbird.com/product/rebrand/943571.png",
    name: "dior",
    price: "$30.00",
    desc: "",
    rating: "5",
    reviews: "4,234"
  },
  {
    id: 4,
    img: "https://www.chanel.com/images//t_one/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/coco-noir-eau-de-parfum-spray-3-4fl-oz--packshot-default-113660-9519205842974.jpg",
    name: "chanel",
    price: "$30.00",
    desc: "",
    rating: "3",
    reviews: "332"
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