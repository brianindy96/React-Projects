import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState:{
        name: "Brian",
        email: "banana@gmail.com",
    },
    reducers:{
        update: (state, action) =>{
            
        }
    }
})