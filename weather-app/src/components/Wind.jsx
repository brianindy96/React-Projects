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
    position: relative;
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

const Arrow = styled.div`
    --direction: 0deg;
    --size: 1rem;
    --height: 4.5rem;
    height: var(--height);
    width: var(--size);
    background: black;
    clip-path: polygon(50% 0%, 0 100%, 100% 100%);
    transform: ${(props) => props.john && `translateY(-50%) rotate(${props.john}deg)`};
    transform-origin: bottom center;

    transition: transform 500ms ease;
`

const N = styled.span`
    position: absolute;
    top: 0;
    color: #d50101;
    font-weight: 800;
    font-size: 1.2rem;
`

const Wind = ({ weather, john }) => {
  return (
    <Container>
        <WindInfo>
            <WindTitle>
                Wind
            </WindTitle>
            <WindSpeed>
                {weather.speed} km/hr
            </WindSpeed>
        </WindInfo>
        <CompassCon>
            <Compass style={{color: "black"}}>
                <N>N</N>
                <Arrow weather={weather} john={weather.deg} />
            </Compass> 
        </CompassCon>
    </Container>
  )
}

export default Wind