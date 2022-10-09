import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from "../components/Newsletter"
import { Remove, Add } from '@mui/icons-material';
import {mobile, tablet} from "../responsive"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    min-height: 50vh;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`

const ImageContainer = styled.div`
    flex: 1;
    min-width: 400px;

    ${mobile({minWidth: "350px"})};
    

`

const Image = styled.img`
    width: 100%;  
    display: block;

`
const InfoContainer = styled.div`
    height: 100%;
    flex: 1;
    margin-top: 20px;
    padding: 0 50px;

    ${mobile({padding: "10px"})};

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
    margin-top: 10px;
    width: 50%;
    display: flex;
    justify-content: space-between;

    ${mobile({width: "100%"})};

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
    background-color: ${props =>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`

// -------------------- QUANTITY ----------------------
const AddContainer = styled.div`
    margin-top: 10px;   
    display: flex;
    align-items: center;   
    width: 50%; 
    justify-content: space-between;

    ${tablet({width: "100%"})}
    ${mobile({width: "100%", marginTop: "20px"})};

`

const AmountContainer = styled.option`
    display: flex;
    background-color: white;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background: none;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.5 ease-in-out;
    font-weight: 700;

    ${mobile({padding: "5px"})};


    &:hover{
        background-color: #e7e7e7;
    }
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
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product