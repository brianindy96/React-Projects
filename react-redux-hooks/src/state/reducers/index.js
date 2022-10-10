// Combining all reducers together

import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    // key value pair
    account: accountReducer
});

export default reducers;