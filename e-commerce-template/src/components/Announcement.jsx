import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 5vh;
    background-color: orange;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`
const Announcement = () => {
  return (
    <Container>
        <p style={{margin: 0, padding: "10px"}}>Super Deal! Free Shipping on Orders Over 50EUR</p>
    </Container>
  )
}

export default Announcement