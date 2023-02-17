import React from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.div`
    aspect-ratio: 16/9;
    height: 100%;
    display: grid;
    grid-template-columns: 20vw 1fr 200px;
    width: 100vw;

    /* &.is-reveal {
      .gallery-item-image {
        transform: scale(1);
        filter: none;
      }
    } */
`

const ItemCon = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;
    
`

const ItemInfo = styled.div`
    position: absolute;
    bottom: 10%;
    z-index: 1;
    transform: translateX(-20%);
    color: #dbd8d6;
    color: white;
`

const GalleryTitle = styled.h1`
    line-height: 6vw;
    font-family: "Bai Jamjuree";
    font-weight: 600;

    font-size: 6vw;
    -webkit-font-smoothing: antialiased;
`

const GallerySubTitle = styled.h2`
     position: relative;
      line-height: 6vw;
      color: transparent;
      font-family: "Bodoni Moda";
      font-weight: 400;
      font-size: 6vw;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke: 2px #dbd8d6;
`

const GalleryCategory = styled.p`
     position: relative;
      line-height: 24px;
      font-family: "Bai Jamjuree";
      font-weight: 400;
      font-size: 24px;
      -webkit-font-smoothing: antialiased;
      margin-top: 2vh;
`
const GalleryImageCon = styled.div`
    background-image: ${props => props.src && `url(${props.src})`};
    background-size: cover;
    background-position: center;
    transform-origin: center;
    width: 100%;
    height: 100%;
    will-change: transform;
    transform: scale(0.7);
    transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%);
`

const GalleryItem = ({
    src,
    category,
    subtitle,
    title,
    updateActiveImage,
    index,
  }) => {
  return (
    <ItemWrapper className='gallery-item-wrapper'>
        <div></div>
        <ItemCon className={"gallery-item"}>
            <ItemInfo className="gallery-item-info">
            <GalleryTitle className="gallery-info-title">{title}</GalleryTitle>
            <GallerySubTitle className="gallery-info-subtitle">{subtitle}</GallerySubTitle>
            <GalleryCategory className="gallery-info-category">{category}</GalleryCategory>
            </ItemInfo>
            <GalleryImageCon src={src} className="gallery-item-image" />
        </ItemCon>
        <div></div>
    </ItemWrapper>
  )
}

export default GalleryItem