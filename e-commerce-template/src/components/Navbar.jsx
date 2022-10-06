import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 10vh;
    color: white;
    background-color: black;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
    padding: 30px;
`

const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;

`

const Navbar = () => {
  return (
    <Container >
        <Wrapper>
            <Left>
                {/* Language Selector Component */}
                {/* Search Component */}
            </Left>
            <Center>
                Center
            </Center>
            <Right >
                Right
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar