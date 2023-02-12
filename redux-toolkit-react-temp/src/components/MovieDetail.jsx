import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import movieApi, { API_KEY } from '../api/movieApi'
import { useParams } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;
    padding: 3rem;
`


const MovieDetail = () => {

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    // this id comes from what we set route in App.jsx for MovieDetails element
    const { id } = useParams();
    
    const fetchMovieDetails = async () => {
        try{
            const { data } = await movieApi.get(`?apikey=${API_KEY}&i=${id}&plot=full`);

            // console.log(data);
            setMovie(data);
            setLoading(true);

        } catch(error) {
            console.log("There is an error");
        }
    }
    // useState
    useEffect(() => {
      fetchMovieDetails();
    }, [])
    
  return (
    <div>
        {loading ? (
            <Container>
                <div style={{marginRight: "10px"}}>
                    <img src={movie.Poster} alt="movie poster" />
                </div>
                <div>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Plot}</p>
                    <div>
                        <strong>Release Date: {movie.Release}</strong>
                    </div>
                </div>
            </Container>
        ): (
            <div>
                <h4>Loading...</h4>
            </div>
        )}
    </div>
  )
}

export default MovieDetail