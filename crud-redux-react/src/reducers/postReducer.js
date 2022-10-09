
//  2 parameters = (intialState, action)
// action = javascript object with type property
const postReducer = (state = [], action) => {
    // we are observing the type of the action
    switch(action.type){
        // if the action is ADD_POST, then setState of the initial object by accessing the data from action's object
        case 'ADD_POST':
            return state.concat([action.data]);
    default:
        return state;
    }
}

export default postReducer;