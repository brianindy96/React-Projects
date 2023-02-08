import React from 'react'
import styled from 'styled-components'
import { mobileL, tablet } from '../responsive'
import Products from './Products'
const Container = styled.div`
    min-height: 70vh;
    ${tablet({display: "none"})}
`

const Wrapper = styled.div`
    max-width: 1580px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
   
    ${tablet({padding: "10px", flexDirection: "column"})}

`

const ImgContainer = styled.div`
    flex: 1;
    position: relative;
    

`  

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding: 0 5px;
`

const Info = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content :center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 4rem;
    color: white;
    z-index: 3;
`

const Opacity = styled.div`
    left: 5px;
    background-color: black;
    position: absolute;
    z-index: 2;
    width: 98%;
    height: 100%;
    opacity: 0.5;
`

const Btn = styled.a`
    z-index: 3;
    padding: 3px 10px;
    border: 1px solid white;
    background-color: transparent;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
    transition: 0.2s ease;
    text-decoration: none;

    &:hover{
        transform: scale(1.1);

    }
`
const Categories = () => {
  return (
    <Container>
        <Wrapper>
            <ImgContainer>
                <Info>
                    <Title>FEATURED</Title>
                    <Btn href="#products">EXPLORE</Btn>
                </Info>
                <Opacity></Opacity>
                <Img src='/img/img1.jpg'/>
            </ImgContainer>
            <ImgContainer>
                <Info>
                    <Title>FEATURED</Title>
                    <Btn href="#products">EXPLORE</Btn>
                </Info>
                <Opacity></Opacity>
                <Img src='/img/img2.jpg'/>
            </ImgContainer>
            <ImgContainer>
                <Info>
                    <Title>FEATURED</Title>
                    <Btn href="#products">EXPLORE</Btn>
                </Info>
                <Opacity></Opacity>
                <Img src='/img/img3.jpg'/>
            </ImgContainer>
        </Wrapper>
    </Container>
  )
}

export default Categories