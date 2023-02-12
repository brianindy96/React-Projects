import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import MovieCard from './MovieCard'
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr); 
    grid-gap: 1rem;
    margin: 1rem 0;
`
const MovieListing = () => {

    // access movies from STORE
    const { movies } = useSelector((state) => state.movies)

    return (
        <Container>
            {movies && movies.map((movie)=> (
                <MovieCard key={movie.imdbID} movie={movie}/>
            ))}
        </Container>
    )
}

export default MovieListing