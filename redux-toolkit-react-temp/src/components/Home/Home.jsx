import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { addMovie } from '../../store/Reducer'
import movieApi from '../../api/movieApi'
import { API_KEY } from '../../api/movieApi'

const Home = () => {

    // Dispatch
    const dispatch = useDispatch();

    // States
    const [search, setSearch] = useState('');
    
    
    const fetchMovies = async () => {
        const searchKey = search ? search : "Thor"

        const res = await movieApi.get(`?apikey=${API_KEY}&s=${searchKey}&type=movie`);

        console.log(res);
        // setTimeout(()=>{
        //     dispatch(addMovie(res.data.search))
        // }, 5000)
    }
    // UseEffect 

    useEffect(() => {
        fetchMovies();
    }, [])
    
  return (
    <div>Home</div>
  )
}

export default Home