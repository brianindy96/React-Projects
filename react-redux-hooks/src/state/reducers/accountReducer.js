// our Reducer
const reducer = (state = 0, action) =>{
    switch(action.type){
        case "DEPOSIT":
            // current + payload(amount)
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        default:
            return state
    }
};

export default reducer