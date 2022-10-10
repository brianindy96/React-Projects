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

const reducer = (state = initialState, action) =>{
    const allStudents = [...state.students];
    switch(action.type){
        case 'ADD_STUDENT':
            const addedState = {
                ...state,
                students: [action.payload, ...state.students],
            }
            return addedState;
        case 'EDIT_STUDENT':
            const indexForEdit = allStudents.findIndex((item)=>{
                return item.id === action.payload.id;
            });
            allStudents[indexForEdit] = {
                id: action.payload.id,
                name: action.payload.name,
                score: action.payload.score,
            }
            const editedState = {
                ...state,
                students: allStudents
            }
            return editedState;
        case 'DELETE_STUDENT':
            const newState ={
                ...state,
                students: state.students.filter(item => item.id !== action.payload)
            }
            return newState;
        default:
            break;
    }
    return state;
}

export default reducer;