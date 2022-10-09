import React, { useState } from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { slideItems }  from "../data"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    background-color: #fff;
    /* Overflow when stacking 3 slides */
    overflow: hidden;

    ${mobile({display: "none"})}

`
// Arrows
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    color: white;
    background-color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Positioning of the arrow divs */
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    /* sending props */
    left: ${props => props.direction === "back" && "10px"};
    right: ${props => props.direction === "forward" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

// Slides 

// SLIDES STILL NOT RESPONSIVE!!!

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 85vh;
    align-items: center;
`

const ImgContainer = styled.div`
    flex: 1;
    border: 1px solid white;
    /* Height 100% to its parent */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 80%;

`;

const InfoContainer = styled.div`
    flex: 1.2;
    padding: 50px 70px;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 4.375rem;
`
const Info = styled.p`
    margin: 50px 0;
    line-height: 1.5rem;
    font-size: 1.25rem;
    letter-spacing: 3px;

`
const Button = styled.button`
    padding: 10px;
    border: 2px solid #252525;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    background: none;
`

const Slider = () => {

    /* Set state for Slide */
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
        <Arrow onClick={() => handleClick("left")} direction="back">
            <ArrowBackIosIcon style={{color: "#fff"}}/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {slideItems.map((item)=>(
                <Slide key={item.id} >
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Info>
                            {item.desc}
                        </Info>
                        <Button>SHOW MORE</Button>
                    </InfoContainer>
                </Slide>
            ))};
        </Wrapper>
        <Arrow onClick={() => handleClick("right")} direction="forward">
            <ArrowForwardIosIcon style={{color: "#fff"}}/>
        </Arrow>
    </Container>
  )
}

export default Slider