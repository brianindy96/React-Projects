import { configureStore } from '@reduxjs/toolkit'
import movieSlice from "./Reducer"


// 1. Set up store for state management
const store = configureStore({
    reducer: {
        // putting movieSlice in this store as "movies"
        movies: movieSlice,
    },
})

export default store