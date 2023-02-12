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
import { formatToLocalTime } from '../services/weatherServices';
import { tablet } from '../responsive';
const Container = styled.div`
    flex: 1;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2,1fr);

    ${tablet({margin: "0", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid #b0b0b0"})}

`

const Box = styled.div`
  height: 100px;
  margin: 10px;
  padding: 2px;

  ${tablet({margin: "5px", height: "50px"})};

`

const BoxName = styled.div`
  display: flex;
  align-items: center;
`

const BoxTitle = styled.span`
  font-size: 0.9rem;
  ${tablet({fontSize: "0.7rem"})};

`

const NumCon = styled.div`

`

const Num = styled.span`
  font-size: 1.6rem;
  ${tablet({fontSize: "1.4rem"})};

`

const Unit = styled.span`
  font-size: 1rem;
  margin-left: 2px;
`

const TemperatureDetails = ({ weather }) => {
  return (
    <Container>
            <Box>
                <BoxName>
                  <ThermostatIcon></ThermostatIcon>
                  <BoxTitle>Feels Like: </BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>{weather.feels_like}°</Num>
                </NumCon>
            </Box> 
            
            <Box>
                <BoxName>
                  <ThermostatIcon></ThermostatIcon>
                  <BoxTitle>Humidity:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>{weather.humidity}</Num>
                  <Unit>g/kg</Unit>
                </NumCon>
            </Box>
            
            <Box>
                <BoxName>
                  <WbSunnyIcon></WbSunnyIcon>
                  <BoxTitle>Sun Rise:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>{formatToLocalTime(weather.sunrise, weather.tz_min, "hh:mm a")}</Num>
                  
                </NumCon>
            </Box>
            <Box>
                <BoxName>
                  <WbSunnyIcon></WbSunnyIcon>
                  <BoxTitle>Sun Rise:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>{formatToLocalTime(weather.sunset, weather.tz_min, "hh:mm a")}</Num>
                </NumCon>
            </Box>
            <Box>
                <BoxName>
                  <WhatshotIcon></WhatshotIcon>
                  <BoxTitle>Highest:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>{weather.temp_max}°</Num>
                </NumCon>
            </Box>
            <Box>
                <BoxName>
                  <AcUnitIcon></AcUnitIcon>
                  <BoxTitle>Highest:</BoxTitle>
                </BoxName>
                <NumCon>
                  <Num>{weather.temp_min}°</Num>
                </NumCon>
            </Box>
    </Container>
  )
}

export default TemperatureDetails