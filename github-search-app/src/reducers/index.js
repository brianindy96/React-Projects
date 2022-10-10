const initialState = {
    userData: {},
    isFetching: false,
    isError: false,
}

// PURE FUNCTION : cannot works as asynchronous
const asyncReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'FETCH_USER':
            return Object.assign({}, state, {
                isFetching: true,
                userData: {},
                isError: false,
            });
        case 'FETCHED_USER':
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
                // fetches data from the action in fetchAction
                userData: action.data
            });
        case 'FETCHED_USER':
            return Object.assign({}, state, {
                isFetching: false,
                isError: true,
                });
        default:
            break;
    }
    return state;
}

//THUNK:
// when action is dispatched
// the store receives the the action as an Object
// redux-thunk changes it to function 
// TEMPLATE: return function(dispatch, getState)

export default asyncReducer;