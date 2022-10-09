
//  2 parameters = (intialState, action)
// action = javascript object with type property
const postReducer = (state = [], action) => {
    // we are observing the type of the action
    switch(action.type){
        // if the action is ADD_POST, then setState of the initial object by accessing the data from action's object
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id)
        case 'EDIT_POST':
            return state.map((post)=> post.id === action.id ? 
            {...post, 
                editing : !post.editing 
            }
            : post);
        case 'UPDATE':
            return state.map((post)=>{
                if (post.id === action.id){
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        editing: !post.editing,
                    }
                } else return post;
            })
        default:
            return state;
    }
}

export default postReducer;