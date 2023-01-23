import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  
`

const Wrapper = styled.div`
  
`

const ItemInfo = styled.div`
  
`

const ItemImg = styled.img`

`

const InfoTitle = styled.h1`
  
`

const Subtitle = styled.h6`
  
`

const Desc = styled.p`
  
`

const GalleryItem = ({ src, category, subtitle, title, updateActiveImage, index }) => {
  return (
    <Container>
      <Wrapper className="gallery-item">
        <ItemInfo>
          <InfoTitle>{title}</InfoTitle>
          <Subtitle>{subtitle}</Subtitle>
          <Desc>{category}</Desc>
        </ItemInfo>
        <ItemImg src={src}/>
      </Wrapper>
    </Container>
  )
}

export default GalleryItem