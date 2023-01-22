import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    
`

const FeaturedRowLayout = styled.div`
    
`

const FeaturedColumnLayout = styled.div`
    
`

const PlantName = styled.h6`
    
`

const PlantImg = styled.img`
    
`

const Featured = () => {
  return (
    <Container>
        <FeaturedRowLayout>
            <PlantName>green</PlantName>
            <PlantImg src="https://images.unsplash.com/photo-1598838073192-05c942ede858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100" />
        </FeaturedRowLayout>
        <FeaturedColumnLayout>
            <PlantName>lily</PlantName>
            <PlantImg src="https://images.unsplash.com/photo-1552248524-10d9a7e4841c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=100"/>
        </FeaturedColumnLayout>
    </Container>
  )
}

export default Featured