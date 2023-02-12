import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Forecast from './Forecast'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Container = styled.div`
    background-color: #e6e6e6;
    color: black;
    height: 60vh;
    /* when show, Y(-170px), when hide Y(180px) */
    transform: ${props => props.display ? "translateY(-170px)" : "translateY(180px)"};
    transition: 0.7s ease-in-out;
`

const ArrowUp = styled(KeyboardArrowUpIcon)`
  cursor: pointer;
  margin: 0;

  &:hover{
    transform: scale(1.1);
    
  }
`

const ArrowDown = styled(KeyboardArrowDownIcon)`
  cursor: pointer;
  margin: 0;

  &:hover{
    transform: scale(1.1);
    
  }
`

const ForecastCon = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  margin: 0;
`
const Forecasts = ({ weather }) => {

  // states
  const [display, setDisplay] = useState(false);

  // everytime we click Arrow, we want the state to TranslateY() either 175 or -185

  const handleClick = () => {
    setDisplay(prevDisplay => !prevDisplay)

    
  }

  // UseEffect

  return (
    <Container display={display}>
        <Title onClick={handleClick}>
          {(display === false) ? (
             <div>
              <ArrowUp/>
             </div>
          ) : (
              <div>
                <ArrowDown/>
              </div>
          )}
        </Title>
        <ForecastCon>
          <Forecast weather={weather} forecast={weather.today}/>
          <Forecast weather={weather} forecast={weather.tmr}/>
          <Forecast weather={weather} forecast={weather.afterTmr}/>
        </ForecastCon>
        
    </Container>
  )
}

export default Forecasts