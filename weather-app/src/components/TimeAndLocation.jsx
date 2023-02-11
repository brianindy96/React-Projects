import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const LocalTimeCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const LocalTime = styled.p`
    font-size: 1.2rem;
`

const CityCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
`

const CityName = styled.h3`
    font-size: 3.6rem;
    margin: 0;
    font-weight: 800;
`

const CityTempCon = styled.div`
    
`

const CityTemp = styled.span`
    font-size: 6rem;
    font-weight: 600;
    color: #000000;
`

const Symbol = styled.span`
    
`
const TimeAndLocation = () => {
  return (
    <Container>
          <LocalTimeCon>
            <LocalTime>
                Local Time:
            </LocalTime>
          </LocalTimeCon>

          <CityCon >
            <CityName>
                Berlin, DE
            </CityName>
          </CityCon>

          <CityTempCon>
            <CityTemp>
                3°C
            </CityTemp>
          </CityTempCon>
          
    </Container>
  )
}

export default TimeAndLocation