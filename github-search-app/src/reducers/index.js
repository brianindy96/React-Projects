const initialState = {
    userData: {},
    isFetching: false,
    isError: false,
}

// PURE FUNCTION : cannot works as asynchronous
const asyncReducer = (state=initialState, action) =>{
    return state;
}

//THUNK:
// when action is dispatched
// the store receives the the action as an Object
// redux-thunk changes it to function 
// TEMPLATE: return function(dispatch, getState)

export default asyncReducer;