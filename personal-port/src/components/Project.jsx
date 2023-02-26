import React from 'react'
import styled from 'styled-components'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Container = styled.div`
    min-height: 65vh;
    padding-top: 5rem;
`

const LeftRightCon = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

`
// Left Container
const Left = styled.div`
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: ${props => props.reverse ? "0" : "5rem"};
    padding-left: ${props => props.reverse ? "0" : "0"};
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
    font-size: 1.8rem;
    margin-bottom: 0.5rem;  
`

const TechnologyTitle = styled.h3`
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
`

const TechName = styled.p`
    font-size: 1.3rem;
    color: #9e9e9e;
`

const LinkCon = styled.div`
    margin-top: 2.5rem;
`

const Links = styled.a`
    text-decoration: none;
    font-size: 1.3rem;
    margin-right: 1rem;

    &:hover {
        color: #28c2f1ee;
        transition: all 0.1s ease;
    }
`



// Right Container

const Right = styled.div`
    flex: 1;
    width: 50%;
    margin-left: ${props => props.reverse ? "4.5rem" : "0"};
`

const ImgContainer = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    
    
`

const Img = styled.img`
    width: 130%;
    height: 350px;
    object-fit: cover;
    border-radius: 2px;
    z-index: 1000;   
    box-shadow: 8px 13px 57px -17px rgba(35, 175, 220, 1);
 

`
const Project = ({ project: { img, title, subtitle, summary, reverse, technologies, github, live }}) => {
  return (
    <Container>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubtitle>{subtitle}</ProjectSubtitle>
        <LeftRightCon reverse={reverse}>
        <Left reverse={reverse} >
            <SummaryTitle>Summary</SummaryTitle>
            <SummaryText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum, iure voluptates quisquam error cupiditate eligendi velit odio voluptatibus veritatis reiciendis eaque ducimus sequi unde, quasi beatae explicabo itaque numquam nihil inventore facere esse, nisi sint reprehenderit! Saepe, dolorem fugit.</SummaryText>
            <TechnologyTitle>Technologies:</TechnologyTitle>
            <TechName>{technologies}</TechName>
            <LinkCon>
                <Links href={github}>LIVE PREVIEW <span><OpenInNewIcon /></span></Links>
                <Links href={live}>View Code <span><OpenInNewIcon /></span></Links>
            </LinkCon>
        </Left>
        <Right reverse={reverse} >
            <ImgContainer >
                <Img src={img} alt="project thumbnail" />
            </ImgContainer>
        </Right>
        </LeftRightCon>     
    </Container>
  )
}

export default Project