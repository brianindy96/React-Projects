import React from 'react'
import styled from 'styled-components'
import ExploreIcon from '@mui/icons-material/Explore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AirIcon from '@mui/icons-material/Air';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Container = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2,1fr);

`

const Box = styled.div`
  
  height: 100px;
  margin: 10px;
  padding: 2px;
`

const BoxName = styled.div`
  display: flex;
  align-items: center;
`

const BoxTitle = styled.span`
  font-size: 0.9rem;
`

const NumCon = styled.div`

`

const Num = styled.span`
  font-size: 1.7rem;
`

const Unit = styled.span`
  font-size: 1rem;
  margin-left: 2px;
`

const TemperatureDetails = () => {
  return (
    <Container>
            <Box>
                <BoxName>
                  <ThermostatIcon></ThermostatIcon>
                  <BoxTitle>Feels Like:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>10°</Num>
                </NumCon>
            </Box> 
            
            <Box>
                <BoxName>
                  <ThermostatIcon></ThermostatIcon>
                  <BoxTitle>Humidity:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>80</Num>
                  <Unit>g/kg</Unit>
                </NumCon>
            </Box>
            
            <Box>
                <BoxName>
                  <WbSunnyIcon></WbSunnyIcon>
                  <BoxTitle>Sun Rise:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>06:00</Num>
                  <Unit>AM</Unit>
                </NumCon>
            </Box>
            <Box>
                <BoxName>
                  <WbSunnyIcon></WbSunnyIcon>
                  <BoxTitle>Sun Rise:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>05:00</Num>
                  <Unit>PM</Unit>
                </NumCon>
            </Box>
            <Box>
                <BoxName>
                  <WhatshotIcon></WhatshotIcon>
                  <BoxTitle>Highest:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>10°</Num>
                </NumCon>
            </Box>
            <Box>
                <BoxName>
                  <AcUnitIcon></AcUnitIcon>
                  <BoxTitle>Highest:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>23°</Num>
                </NumCon>
            </Box>
    </Container>
  )
}

export default TemperatureDetails