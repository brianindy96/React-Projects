import React from 'react'
import styled from 'styled-components'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { xs,sm, md, lg, xl } from '../responsive';
import { motion } from 'framer-motion'
import { textVariant, slideIn, fadeIn } from "../utils/motion"

const Container = styled.div`
    min-height: 55vh;
    

    ${xs({textAlign: "center", margin: "1rem 0" })};
    ${sm({textAlign: "center" })};
    ${lg({textAlign: "left", marginBottom: "5rem"})};

`

const LeftRightCon = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};

    ${xs({flexDirection: "column-reverse"})};
    ${sm({flexDirection: "column-reverse"})};
    ${lg({flexDirection: props => props.reverse ? "row" : "row-reverse" })};



`
// Left Container
const Left = styled(motion.div)`
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: ${props => props.reverse ? "0" : "5rem"};
    padding-left: ${props => props.reverse ? "0" : "0"};

    ${xs({width: "100%", textAlign: "center", padding: props => props.reverse ? "0" : "0", marginBottom: "2rem"})};
    ${sm({width: "100%", textAlign: "center", padding: props => props.reverse ? "0" : "0", marginBottom: "2rem"})};
    ${lg({textAlign: "left", width: "50%", paddingRight: props => props.reverse ? "0" : "1rem", paddingLeft: props => props.reverse ? "0.5rem" : "2rem"})};

`

const ProjectTitle = styled(motion.h1)`
    font-size: 2.5rem;
    font-family: 'Bai Jamjuree', sans-serif;

    ${lg({paddingLeft: props => props.reverse ? "0" : "0.5rem"})};

`

const ProjectSubtitle = styled(motion.h2)`
    font-size: 1.8rem;
    margin-bottom: 2rem;
    margin-top: 0;
    font-family: 'Bai Jamjuree', sans-serif;
    color: #9e9e9e;

    ${xs({fontSize: "1.5rem", marginTop: "0.5rem" })};
    ${sm({fontSize: "1.5rem", marginTop: "0.5rem" })};
    ${lg({fontSize: "1.8rem", marginTop: "0", paddingLeft: "0.5rem"})};

`

const SummaryText = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #9e9e9e;

    ${xs({fontSize: "1rem", width: "100%", padding: "0 1rem"})};
    ${sm({fontSize: "1rem", width: "100%", padding: "0 1rem"})};
    ${lg({padding: "0", fontSize: "1.3rem" })};

`

const SummaryTitle = styled.h3`
    font-size: 1.8rem;
`

const TechnologyTitle = styled.h3`
    font-size: 1.6rem;
    margin-bottom: 0.5rem;

    ${xs({marginTop: "0.3rem", fontSize: "1.4rem"})};
    ${lg({marginBottom: "0.5rem", fontSize: "1.6rem"})};

`

const TechName = styled.p`
    font-size: 1.3rem;
    color: #9e9e9e;

    ${xs({fontSize: "1.1rem", margin: "0 2rem"})};
    ${sm({fontSize: "1.1rem", margin: "0 2rem"})};
    ${lg({margin: "0", fontSize: "1.3rem"})};


`

const LinkCon = styled.div`
    margin-top: 2.5rem;

    ${xs({marginTop: "1.1rem"})};
    ${sm({marginTop: "1.1rem"})};
    ${lg({marginTop: "2.5rem"})};

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

    ${xs({marginLeft: "0", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"})};
    ${sm({padding: "0 1.5rem", marginBottom: "1rem", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"})};
    ${lg({marginLeft: props => props.reverse ? "1rem" : "0", width: "50%"})};

`

const ImgContainer = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${xs({width: "70%", height: "auto"})};
    ${sm({width: "70%", height: "auto"})};
    ${lg({width: "80%", height: "80%"})};

    
`

const Img = styled(motion.img)`
    width: 130%;
    height: 350px;
    object-fit: cover;
    border-radius: 5px;
    z-index: 1000;   
 
    ${xs({objectFit: "contain", marginBottom: "1rem", width: "120%", backgroundColor: "#eee"})};
    ${lg({width: "130%", height: "350px", marginBottom: "0", })};

`
const Project = ({ project: { img, title, subtitle, summary, reverse, technologies, github, live }}) => {
  return (
    <Container>
        <ProjectTitle
        variants={textVariant(0.2)}
        whileInView="show"
        initial="hidden"
        viewport={{once: false, amount: 0.25}}
        >{title}</ProjectTitle>
        <ProjectSubtitle
        variants={textVariant(0.3)}
        whileInView="show"
        initial="hidden"
        viewport={{once: false, amount: 0.25}}
        >{subtitle}</ProjectSubtitle>
        <LeftRightCon reverse={reverse}>
        <Left 
        reverse={reverse}
        variants={fadeIn("left", "tween", 0.4, 1)}
        whileInView="show"
        initial="hidden"
        viewport={{once: false, amount: 0.25}}
        >
            <SummaryTitle>Summary</SummaryTitle>
            <SummaryText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum, iure voluptates quisquam error cupiditate eligendi velit odio voluptatibus veritatis reiciendis eaque ducimus sequi unde, quasi beatae explicabo itaque numquam nihil inventore facere esse, nisi sint reprehenderit! Saepe, dolorem fugit.</SummaryText>
            <TechnologyTitle>Technologies:</TechnologyTitle>
            <TechName>{technologies}</TechName>
            <LinkCon>
                <Links href={live} target="_blank">LIVE PREVIEW <span><OpenInNewIcon /></span></Links>
                <Links href={github} target="_blank">View Code <span><OpenInNewIcon /></span></Links>
            </LinkCon>
        </Left>
        <Right reverse={reverse} >
            <ImgContainer >
                <Img 
                variants={fadeIn("right", "tween", 0.2, 1)}
                whileInView="show"
                initial="hidden"
                viewport={{once: false, amount: 0.25}}
                src={img} alt="project thumbnail" />
            </ImgContainer>
        </Right>
        </LeftRightCon>     
    </Container>
  )
}

export default Project