import React from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    background-color: #fff;
    /* Overflow when stacking 3 slides */
    overflow: hidden;
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
    /* left: ${props => props.direction === "back" && "10px"}; */
    right: ${props => props.direction === "forward" && "10px"};
    cursor: pointer;
    opacity: 0.5;
`;

// Slides 


const Wrapper = styled.div`
    height: 100%;
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
    margin-top: 30px;

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
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Info>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero porro nihil, nostrum itaque debitis asperiores ipsum voluptatum. Odio, asperiores.
                    </Info>
                    <Button>SHOW MORE</Button>
                        
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="forward">
            <ArrowForwardIosIcon style={{color: "#fff"}}/>
        </Arrow>
    </Container>
  )
}

export default Slider