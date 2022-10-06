import React from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    height: 100vh;
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
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowBackIosIcon style={{color: "#fff"}}/>
        </Arrow>
        <Arrow>
            <ArrowForwardIosIcon style={{color: "#fff"}}/>
        </Arrow>
    </Container>
  )
}

export default Slider