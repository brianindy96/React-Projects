import React from 'react'
import { Link } from 'react-router-dom'
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

const ReadMore = styled(Link)`
    background-color: #333;
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    display: inline-block;
    margin-top: 0.5rem;
    border-radius: 5px;
`
const MovieCard = ({ movie: {Title, Year, Poster, imdbID} }) => {
  return (
    <Container>
        <ImgCon>
            <MovieImg src={Poster}/>
        </ImgCon>
        <div style={{flex: "1"}}>
            <MovieTitle>{Title}</MovieTitle>
            <MovieRelease>{Year}</MovieRelease>
            <ReadMore to={`movie/${imdbID}`}>Read More</ReadMore>
        </div>
       
    </Container>
  )
}

export default MovieCard