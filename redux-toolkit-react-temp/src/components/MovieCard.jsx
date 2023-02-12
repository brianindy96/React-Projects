import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 10px;
`   

const MovieTitle = styled.h4`
    
`

const MovieRelease = styled.p`
    
`

const MovieImg = styled.img`
    width: 100%;
`

const ImgCon = styled.div`
    
`

const ReadMore = styled.a`
    background-color: #333;
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    display: inline-block;
    margin-top: 0.5rem;
    border-radius: 5px;
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
            <ReadMore href='/'>Read More</ReadMore>
        </div>
       
    </Container>
  )
}

export default MovieCard