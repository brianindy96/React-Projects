import React, { useState } from 'react'
import styled from "styled-components"
import GalleryItem from './GalleryItem';

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

const Container = styled.section`
    background-color: #d53f41;
    margin-left: -5vw;
    margin-right: -5vw;
    position: relative;
`

const GalleryContainer = styled.div`
  height: 80vh;

  padding: 10vh 0;
  width: 400%;
  display: flex;
  flex-wrap: nowrap;
`

const GalleryCounter = styled.div`
  position: absolute;
  top: 10%;
  left: 100px;
  z-index: 1;
  mix-blend-mode: difference;
  line-height: 16px;
  color: #dbd8d6;

  font-family: "Bai Jamjuree";
  font-weight: 600;

  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
`

const ActiveImg = styled.span`
  
`

const Divider = styled.span`
  content: '';
  background-color: white;
  width: 6.25vw;
  margin: 7px 10px;
  height: 1px;
  display: inline-block;
`

const ImageLengths = styled.span`
  
`
const Gallery = () => {
  
  const [activeImage, setActiveImage] = useState(1);


  return (
    <Container className='gallery-wrap'>
      <GalleryContainer className='gallery'>
        <GalleryCounter className="gallery-counter">
          <ActiveImg>{activeImage}</ActiveImg>
          <Divider />
          <ImageLengths>{images.length}</ImageLengths>
        </GalleryCounter>
        {images.map((image, index) => (
          <GalleryItem 
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={index=> setActiveImage(index + 1)}
          />
        ))}
      </GalleryContainer>
    </Container>
  )
}

export default Gallery