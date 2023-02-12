import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { addMovie } from '../store/Reducer'
import movieApi from '../api/movieApi'
import { API_KEY } from '../api/movieApi'
import MovieListing from './MovieListing'

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Header = styled.h3`
    margin: 1rem 0;
`

const SearchBar = styled.input`
  
`
const Home = () => {

    // Dispatch
    const dispatch = useDispatch();

    // States
    const [search, setSearch] = useState('');
    
    
    const fetchMovies = async () => {
        const searchKey = search ? search : "Thor"

        const res = await movieApi.get(`?apikey=${API_KEY}&s=${searchKey}&type=movie`);

        // console.log this to see what was sent into store
        // console.log(res.data.Search);

        setTimeout(()=>{
            dispatch(addMovie(res.data.Search))
        }, 3000)
    }
    // UseEffect 

    useEffect(() => {
        fetchMovies();
    }, [])
    
  return (
    <Container>
      <Header>Movies</Header>
      <SearchBar placeholder='Search...' type="text" />
      <MovieListing />
    </Container>
  )
}

export default Home