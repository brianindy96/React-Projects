import React from 'react'
import styled from "styled-components";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
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
const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <KeyboardArrowLeftOutlinedIcon/>
        </Arrow>
        <Arrow direction="right">
            <KeyboardArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider