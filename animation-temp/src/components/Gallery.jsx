import React, { useState } from 'react'
import styled from 'styled-components'
import GalleryItem from './GalleryItem'

const Section = styled.section`
    background-color: #d53f41;
    margin-left: -5vw;
    position: relative;
    margin-right: -5vw;
   
`

const GalleryCon = styled.div`
    height: 80vh;
    width: 1600%;
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

  font-size: 23px;
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

const ImgCount = styled.span`
  
`

// Images

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "House Plant 1",
    subtitle: "Living Room",
    category: "Shooting/ Adv.Camping",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "House Plant 2",
    subtitle: "Living Room",
    category: "Shooting/ Adv.Camping",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "House Plant 3",
    subtitle: "Living Room",
    category: "Shooting/ Adv.Camping",
  },
  {
    id: 4,
    src: "/img/house4.jpg",
    title: "House Plant 4",
    subtitle: "Living Room",
    category: "Shooting/ Adv.Camping",
  },
]

const Gallery = () => {

  const [activeImage, setActiveImage] = useState(1);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };


  return (
    <Section className='section-wrapper gallery-wrap'>
      <GalleryCon>
        <GalleryCounter>
          <ActiveImg>{activeImage}</ActiveImg>
          <Divider className="divider" />
          <ImgCount>{images.length}</ImgCount>
        </GalleryCounter>
        {images.map((image) => (
          <GalleryItem 
          key={image.id} 
          title={image.title} 
          img={image.src} 
          { ...image}
          updateActiveImage={handleUpdateActiveImage}
          />
        ))}
        <GalleryItem /> 
      </GalleryCon>
    </Section>
  )
}

export default Gallery