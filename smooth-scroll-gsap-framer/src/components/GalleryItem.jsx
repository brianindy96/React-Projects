import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  aspect-ratio: 16/9;
  height: 100%;
  display: grid;
  grid-template-columns: 20vw 1fr 200px;
  width: 100vw;

  /* Second styling */
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
`

const ItemInfo = styled.div`
  position: absolute;
  top: 50%;
  z-index: 1;
  transform: translateX(-20%);
  color: #dbd8d6;
`

const ItemImg = styled.img`
  top: 0%;
  position: absolute;
    background-size: cover;
    background-position: center;
    transform-origin: center;
    width: 100%;
    height: 100%;
    will-change: transform;
    transform: scale(0.7);
    /* transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%); */
`

const InfoTitle = styled.h1`
  line-height: 6vh;
  font-family: "Bai Jamjuree";
  font-weight: 600;
  font-size: 6vw;
  -webkit-font-smoothing: antialiased;
  margin: 10px 0;
`

const Subtitle = styled.h6`
  position: relative;
  margin: 20px 0;
      line-height: 6vw;
      color: transparent;
      font-family: "Bodoni Moda";
      font-weight: 400;
      font-size: 6vw;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke: 2px #dbd8d6;
`

const Desc = styled.p`
      position: relative;
      margin: 10px 0;
      line-height: 24px;
      font-family: "Bai Jamjuree";
      font-weight: 400;
      font-size: 24px;
      -webkit-font-smoothing: antialiased;


`

const GalleryItem = ({ src, category, subtitle, title, updateActiveImage, index }) => {
  return (
    <Container className='gallery-item-wrapper'>
      <div></div>
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