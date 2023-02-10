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
    font-size: 1.6rem;
`

const CityTempCon = styled.div`
    
`

const CityTemp = styled.span`
    font-size: 8rem;
`

const Symbol = styled.span`
    
`
const TimeAndLocation = () => {
  return (
    <Container>
          <LocalTimeCon className="flex items-center justify-center my-6">
            <LocalTime className="text-white text-xl font-extralight">
                Local Time:
            </LocalTime>
          </LocalTimeCon>

          <CityCon className="flex items-center justify-center my-3">
            <CityName className="text-white text-3xl font-medium">
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