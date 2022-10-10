import { createStore, applyMiddleware } from "redux"
import asyncReducer from "./reducers"
import thunk from "redux-thunk"

// create store that accesses the asynchronous reducers
const store = createStore(
    asyncReducer,
    applyMiddleware(thunk)
);

export default store;