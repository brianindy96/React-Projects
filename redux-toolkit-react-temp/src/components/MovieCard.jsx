import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const MovieTitle = styled.h4`
    
`

const MovieRelease = styled.p`
    
`

const MovieImg = styled.img`
    
`

const ImgCon = styled.div`
    
`
const MovieCard = ({ movie: {Title, Year, Poster} }) => {
  return (
    <Container>
        <ImgCon>
            <MovieImg src={Poster}/>
        </ImgCon>
        <div style={{flex: "1"}}>
            <MovieTitle>{Title}</MovieTitle>
            <MovieRelease>{Year}</MovieRelease>
        </div>
       
    </Container>
  )
}

export default MovieCard