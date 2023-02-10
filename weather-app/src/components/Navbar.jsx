import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    border-bottom: 1px solid black;
    
`

const Button = styled.span`
    text-decoration: none;
    margin: 0 20px;
    border: none;
    background-color: none;
    font-size: 1.2rem;
    cursor: pointer;
`
const Navbar = () => {

    const cities = [
        {
            id: 1,
            title: 'London',
        },
        {
            id: 2,
            title: "Berlin",
        },
        {
            id: 3,
            title: "Chiang Mai",
        },
        {
            id: 4,
            title: "New York",
        },
        {
            id: 5,
            title: "Sydney",
        },
    ];

  return (
    <Container>
        {cities.map((city) =>(
            <Button key={city.id}>{city.title}</Button>
        ))}
    </Container>
  )
}

export default Navbar