import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Input = () => {
  return (
    <Container>
        <Left>
            <button name="metric">°C</button>
            <p>|</p>
            <button name="imperial">°F</button>
        </Left>
        <Right>
            <input placeholder='Search Here...'></input>
            <SearchIcon />
            <LocationOnIcon/>
        </Right>
    </Container>
  )
}

export default Input