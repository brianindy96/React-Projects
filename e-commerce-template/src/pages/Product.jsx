import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from "../components/Newsletter"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`

const ImageContainer = styled.div`
    flex: 1;
    min-width: 500px;
    padding: 30px;
`

const Image = styled.img`
    object-fit: cover;
    max-height:100%; 
    max-width:100%;
`
const InfoContainer = styled.div`
    flex: 1;
    margin-top: 20px;
    padding: 0 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 2rem;
`

// -------------------Filters------------------

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color ${props =>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`


const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImageContainer>
                <Image src="/img/suit.jpg"/>
            </ImageContainer>
            <InfoContainer>
                <Title>100% WOOL SUIT TROUSERS </Title>
                <Desc>Italian wool trousers. Straight fit. Front pockets. Decorative pockets with double piping </Desc>
                <Price>20,0 EUR</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="blue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>

                </FilterContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product