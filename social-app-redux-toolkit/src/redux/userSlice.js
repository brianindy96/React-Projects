import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState:{
        name: "Brian",
        email: "banana@gmail.com",
    },
    reducers:{
        update: (state, action) =>{
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        // we're not updating an Object, just setting something to null
        remove: (state) => (
            // setting initial state to empty string
            state = {}
        ),
        addHello: (state,action) => {
            state.name = "Hello" + action.payload.name;
        }
    },
});

// exporting actions
export const { update, remove, addHello } = userSlice.actions;
// exporting reducer to store.js
export default userSlice.reducer;