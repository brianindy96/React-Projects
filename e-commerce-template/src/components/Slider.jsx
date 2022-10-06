import React from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
`

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
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="back">
            <ArrowBackIosIcon style={{color: "#fff"}}/>
        </Arrow>
        <Arrow direction="forward">
            <ArrowForwardIosIcon style={{color: "#fff"}}/>
        </Arrow>
    </Container>
  )
}

export default Slider