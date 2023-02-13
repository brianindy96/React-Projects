import { createSlice, current } from '@reduxjs/toolkit'

// Initial State

// Something like const [movie, setMovie] = useState([]) ? ;
const initialState = {
    movies: [],
}

// createSlice takes in 3 parameters in its Object: name, initialState, action
const movieSlice = createSlice({
    name: "movieListing",
    initialState,
    // Stores are immutable, therefore requires reducers to send to it
    // functions that we want to send to the store to change it
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload

            // current(state) shows you what is the current state 
            console.log(current(state))
        }
    }
})

// export the function's actions (reducers)
export const { addMovie } = movieSlice.actions

// export the function createSlice as a whole
export default movieSlice.reducer