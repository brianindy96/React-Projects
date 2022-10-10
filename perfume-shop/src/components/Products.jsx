import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
    min-height: 80vh;
`

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 30px;
    margin-left: 20px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(310px, 350px));
    margin: 30px 40px;
    grid-gap: 25px;
`

const Products = () => {

    const products = [
    {id: 1, name: "Chanel de Bleu", description: "Running Shoes", image: "/img/chanel.png"},
    {id: 2, name: "Dior Sauvage", description: "Apple Cinnamon" , image: "/img/dior.jpg"},
    {id: 3, name: "Armani di Giorgio", description: "Running Shoes" , image: "/img/armani.jpg"},
    {id: 4, name: "Versace Eros", description: "Apple Cinnamon" , image: "/img/versace.jpg"},
    {id: 5, name: "Azzaro Most Wanted", description: "Running Shoes", image: "/img/azzaro.jpg"},
    {id: 6, name: "Dolce and Gabbana Lightblue", description: "Apple Cinnamon" , image: "/img/dior.jpg"},
    {id: 7, name: "Tom Ford Ombre Leather", description: "Running Shoes" , image: "/img/tom.jpg"},
    {id: 8, name: "Givenchy Gentleman", description: "Apple Cinnamon" , image: "/img/givenchy.jpg"},
    ];


  return (
    <Container>
        <Title>Our Products:</Title>
        <Wrapper>
            {products.map((product)=>(
                <Product key={product.id} product={product} />
            ))}
        </Wrapper>
    </Container>
  )
}

export default Products