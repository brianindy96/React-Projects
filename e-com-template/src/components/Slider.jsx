import React from 'react'
import styled from "styled-components";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    display: flex;
    position: relative;
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
`

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <KeyboardArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src='/img/shoppingone.png' />
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, vel!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <KeyboardArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider