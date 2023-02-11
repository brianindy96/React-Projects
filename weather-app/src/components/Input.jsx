import React, { useState } from 'react'
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

const Button = styled.button`
    background: transparent;
    border: none;
    /* border: 1px solid black;
    border-radius: 10px;
    padding: 5px; */
    font-size: 1.3rem;
    cursor: pointer;
    font-weight: 800;
    color: #eee;

`

const Seperator = styled.p`
    margin: 10px;
`

const SearchBar = styled.input`
    background-color: transparent;
    padding: 5px 10px;
    outline: none;
    border: none;
    width: 20rem;
    color: white;
`

const SearchCon = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 10px;
    height: 40px;
    margin: 10px;
    
`
const Input = ({ setQuery, units, setUnits}) => {

    const [city, setCity] = useState("")


    const handleChange = (e) => {
        // console.log(e.target.value)
        setCity(e.target.value)
      }
    
      const handleSearchSubmit = () =>{
        if (city !== '') {
          setQuery({q: city})
        }
      }

      const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
    
        if( units!== selectedUnit) setUnits(selectedUnit);
      }
  return (
    <Container>
        <Left>
            <Button onClick={handleUnitsChange}  name="metric">°C</Button>
            <Seperator>|</Seperator>
            <Button onClick={handleUnitsChange} name="imperial">°F</Button>
        </Left>
        <Right>
            <SearchCon>
                <SearchBar value={city} onChange={handleChange} placeholder='Search Here...' />
                <SearchIcon onClick={handleSearchSubmit} style={{cursor: "pointer"}} />
            </SearchCon>
            <Seperator>|</Seperator>
            <LocationOnIcon/>
        </Right>
    </Container>
  )
}

export default Input