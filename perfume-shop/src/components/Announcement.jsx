import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #86b5fc;
    font-weight: 600;
    min-height: 3vh;
    width: 100%;
    padding: 5px;
    font-size: 0.9rem;
`

const Wrapper = styled.section`
    max-width: 1580px;
    margin: 0 auto;
    text-align: center;
`
const Announcement = () => {
  return (
    <Container>
        <Wrapper>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<strong> FREE SHIPPING OVER $500.00 </strong> 
        </Wrapper>
    </Container>
  )
}

export default Announcement