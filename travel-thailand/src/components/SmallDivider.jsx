import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    background-color: ${props => props.bg && `${props.bg}`};
    justify-content: center;
    align-items: center;
    min-height: 90vh;
`

const ImgContainer = styled.div`
    background-image: ${props => props.image && `url(${props.image})`};
    background-size: cover;
    background-position: center;
    min-height: 38rem;
    width: 80%;
`

const SmallDivider = ({ image, bg }) => {
  return (
    <Container bg={bg}>
        <ImgContainer image={image} />
    </Container>
  )
}

export default SmallDivider