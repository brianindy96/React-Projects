import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {mobile} from "../responsive.js"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "20px", flexDirection: "column"})}

`

const ImgContainer = styled.div`
    flex: 1;

`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    ${mobile({height: "50vh", objectFit: "cover"})}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({textAlign: "center", padding: "0 20px"})}

`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
    ${mobile({margin: "10px 0"})}

`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    ${mobile({fontSize: "30px"})}

`

const FilterContainer = styled.div`
    display: flex;
    margin: 30px 0px;
    justify-content: space-between;
    width: 50%;
    ${mobile({width: "100%",flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginBottom: "10px"})}

`

const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({marginBottom: "10px"})}

`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    background-color: ${props=> props.color};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;

`

const FilterSize = styled.select`
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: white;
    border: 1px solid lightgrey;
`

const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"})}
    
`

const AmountContainer = styled.option`
    display: flex;
    align-items: center;
    font-weight: 700;
    ${mobile({marginBottom: "20px"})}
    

`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;
    ${mobile({width: "100%"})}

    &:hover{
        background-color: #f8f4f4;
    }
`



const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="/img/suit.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam exercitationem nostrum eaque quaerat tenetur animi necessitatibus saepe ducimus magnam magni quo molestiae voluptate ipsa error incidunt harum fugit omnis tempora voluptatum, porro eveniet maxime deserunt consequatur? Ab fugiat nihil animi!</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colour:</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="red" />
                        <FilterColor color="blue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
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
                        <RemoveIcon />
                        <Amount> 1 </Amount>
                        <AddIcon />
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