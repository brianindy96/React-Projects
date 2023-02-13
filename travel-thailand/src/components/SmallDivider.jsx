import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`

const ImgContainer = styled.div`
    background-image: ${props => props.image && `url(${props.image})`};
    background-size: cover;
    background-position: center;
    min-height: 35rem;
    width: 80%;
`

const SmallDivider = ({ image }) => {
  return (
    <Container>
        <ImgContainer image={image} />
    </Container>
  )
}

export default SmallDivider