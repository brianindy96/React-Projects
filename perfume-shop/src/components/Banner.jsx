import React, { useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { mobileL, tablet } from '../responsive';

const Container = styled.div`
    height: 65vh;
    background-color: #ffe4ab;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    ${tablet({display: "none"})};
    ${mobileL({display: "none"})};

`

const Wrapper = styled.div`
    height: 100%;
    transition: all 1.5s ease;
    display: flex;
    transform: translateX(${props=> props.slideIndex * -100 }vw);
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Positioning the div relative to container */
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    z-index: 2;
`

const Slide = styled.div`
    width: 100vw;
    height: 100%
`

const ImgContainer = styled.div`
    height: 100%
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Banner = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        } else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1: 0 )
        };
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <KeyboardArrowLeftOutlinedIcon  />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            <Slide>
                <ImgContainer>
                    <Img src="/img/ryan.jpg" />
                </ImgContainer>       
            </Slide>
            <Slide>
                <ImgContainer>
                    <Img src="/img/johnny.jpg" />
                </ImgContainer>       
            </Slide>
            <Slide>
                <ImgContainer>
                    <Img src="/img/david.jpg" />
                </ImgContainer>       
            </Slide>
        </Wrapper>
       
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <KeyboardArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Banner