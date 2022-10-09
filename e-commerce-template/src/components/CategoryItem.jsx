import React from 'react'
import styled from 'styled-components';
import {mobile} from "../responsive"

const Container = styled.div`
    flex: 1;
    /* text-align: center; */
    position: relative;
    margin-top: 3px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({height: "30vh"})}
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const Title = styled.h1`
    color: white;
    font-weight: bold;
    margin-bottom: 20px;

`;

const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: bold;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem