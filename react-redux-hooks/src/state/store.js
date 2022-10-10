import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index"
import thunk from "redux-thunk";

export const store = createStore(
    reducers, 
    {},
    // dispatch is async, to make the app work applyMiddleware(thunk) must be executed
    applyMiddleware(thunk)
);