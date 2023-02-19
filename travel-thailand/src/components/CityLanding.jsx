import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    align-items: center;
    min-height: 70vh;
    background-color: #fff;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(10,1fr);
    justify-items: center;
    padding-block: 8rem;
    padding-inline: 10%;
    padding-top: 6rem;
    z-index: 100;
`

const ImgCon = styled.div`
    grid-column: 4/11;
    grid-row: 1/2;
    background-image: ${props=> props.image && `url("${props.image}")`};
    height: 650px;
    
    z-index: 200;
    /* justify-content: center; */
    overflow: hidden;
    width: 100%;
    background-size: cover;
    
`

const TitleCon = styled.div`
    grid-column: 1/9;
    grid-row: 1/2;
    z-index: 200;
    color: white;
    mix-blend-mode: difference;
`

const Title = styled.h1`
    font-size: 10vw;
    font-family: "Bodoni Moda", sans-serif;

`

const CityLanding = ({ title, image }) => {
  return (
    <Container
    data-scroll-section  
    >
        <ImgCon image={image} />
        <TitleCon>
            <Title>{title}</Title>
        </TitleCon>
    </Container>
  )
}

export default CityLanding