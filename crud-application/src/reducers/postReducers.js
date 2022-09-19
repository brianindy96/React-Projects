
// initial state is empty
export const postReducer = (state = [], action) =>{
    switch(action.type){
        // when ever an ADD_POST action is initiated, state concats the action's data in array
        case "ADD_POST":
            return state.concat([action.data]);
        default: 
            return state;
    }
}