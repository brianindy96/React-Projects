import { createStore, applyMiddleware } from "redux"
import asyncReducer from "./reducers"
import thunk from "redux-thunk"

// create store that accesses the asynchronous reducers
const store = createStore(
    asyncReducer,
    // intercepts action and check conditions
    // before sending it to store
    applyMiddleware(thunk)
);

export default store;