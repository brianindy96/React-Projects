// INITIAL STATE

const initialState = {
    students: [
        {
            id: '1',
            name: "Brian Garton",
            score: "94",
        },
        {
            id: '2',
            name: "Chantra Satayathum",
            score: "99",
        },
        {
            id: '3',
            name: "Aaron Smith",
            score: "58",
        },
    ]
}

// REDUCER

// state = initialState
// action is sent from the components
const reducer = (state = initialState, action) =>{
    const allStudents = [...state.students];
    switch(action.type){
        case 'ADD_STUDENT':
            const addedState = {
                // whatever is already in the state array
                ...state,
                // Accessing the student's array, adding the new students to it  
                students: [action.payload, ...state.students],
            }
            return addedState;
        case 'EDIT_STUDENT':
            // accesses allStudents array, then goes through the indexes
            // to find which one matches the one we clicked
            const indexForEdit = allStudents.findIndex((item)=>{
                return item.id === action.payload.id;
            });
            // access the current state using the determined index
            // change its state
            allStudents[indexForEdit] = {
                id: action.payload.id,
                name: action.payload.name,
                score: action.payload.score,
            }
            // return the modified state
            const editedState = {
                ...state,
                students: allStudents
            }
            return editedState;
        case 'DELETE_STUDENT':
            // filter through the state and deletes the one that matches the id
            const newState ={
                ...state,
                students: state.students.filter(item => item.id !== action.payload)
            }
            return newState;
        // if none of the cases match, break out of the loop
        default:
            break;
    }
    return state;
}

export default reducer;