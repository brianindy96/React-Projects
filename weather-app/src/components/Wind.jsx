import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 0 20px;
`

const CompassCon = styled.div`
    flex: 1.2;
`
const Compass = styled.div`
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WindInfo = styled.div`
    flex: 2;
`

const WindTitle = styled.h2`
    font-size: 1.8rem;
`

const WindSpeed = styled.span`
    font-size: 1.5rem;
`

const Wind = () => {
  return (
    <Container>
        <WindInfo>
            <WindTitle>
                Wind
            </WindTitle>
            <WindSpeed>
                75 km/hr
            </WindSpeed>
        </WindInfo>
        <CompassCon>
            <Compass>
                Me Compass
            </Compass> 
        </CompassCon>
    </Container>
  )
}

export default Wind