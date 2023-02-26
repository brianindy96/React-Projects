import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 60vh;
    padding-top: 20px;
`

const LeftRightCon = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

`
// Left Container
const Left = styled.div`
    flex: 0.8;
    width: 50%;
    display: flex;
    width: 600px;
    flex-direction: column;
    justify-content: center;
    padding-right: ${props => props.reverse ? "0" : "1.5rem"};
    padding-left: ${props => props.reverse ? "3rem" : "0"};
`

const ProjectTitle = styled.h1`
    font-size: 2.5rem;
    font-family: 'Bai Jamjuree', sans-serif;
`

const ProjectSubtitle = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 2rem;
    margin-top: 0;
    font-family: 'Bai Jamjuree', sans-serif;
    color: #9e9e9e;
`

const SummaryText = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #9e9e9e;

`

const SummaryTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;  
`

const TechnologyTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`

const TechName = styled.p`
    font-size: 1.3rem;
    color: #9e9e9e;
`

const LinkCon = styled.div`
    margin-top: 1rem;
`

const Links = styled.a`
    text-decoration: none;
    font-size: 1.6rem;
    margin-right: 1rem;
`



// Right Container

const Right = styled.div`
    flex: 1;
    width: 50%;
`

const ImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 10px 6px 33px -8px #ff0808;
    z-index: 1000;
`
const Project = ({ reverse, img }) => {
  return (
    <Container>
        <ProjectTitle>Weathering the storm</ProjectTitle>
        <ProjectSubtitle>Weather App</ProjectSubtitle>
        <LeftRightCon  reverse={reverse}>
        <Left reverse={reverse}>
            <SummaryTitle>Summary</SummaryTitle>
            <SummaryText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum, iure voluptates quisquam error cupiditate eligendi velit odio voluptatibus veritatis reiciendis eaque ducimus sequi unde, quasi beatae explicabo itaque numquam nihil inventore facere esse, nisi sint reprehenderit! Saepe, dolorem fugit.</SummaryText>
            <TechnologyTitle>Technologies:</TechnologyTitle>
            <TechName>React, Commerce.js, Material UI, styled-components, React Router</TechName>
            <LinkCon>
                <Links href="#">LIVE PREVIEW</Links>
                <Links href="#">View Code</Links>
            </LinkCon>
        </Left>
        <Right reverse={reverse}>
            <ImgContainer>
                <Img src={img} alt="project thumbnail" />
            </ImgContainer>
        </Right>
        </LeftRightCon>     
    </Container>
  )
}

export default Project