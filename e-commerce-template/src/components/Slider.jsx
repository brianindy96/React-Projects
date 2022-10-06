import React from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
`

// Arrows

const Arrow = styled.div`
    height: 50px;
    width: 50px;
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
    /* left: ${props => props.direction === "back" && "10px"}; */
    right: ${props => props.direction === "forward" && "10px"};
    cursor: pointer;
    opacity: 0.5;
`;

// Slides 


const Wrapper = styled.div`
    height: 100%;
    background-color: coral;
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
`

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    border: 1px solid purple;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="back">
            <ArrowBackIosIcon style={{color: "#fff"}}/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src="/img/shoppingone.png" />
                </ImgContainer>
                <InfoContainer />
            </Slide>
        </Wrapper>
        <Arrow direction="forward">
            <ArrowForwardIosIcon style={{color: "#fff"}}/>
        </Arrow>
    </Container>
  )
}

export default Slider