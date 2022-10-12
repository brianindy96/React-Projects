// ACTION CREATOR

// the amount parameter will be given from components
export const depositMoney = (amount) =>{
    return (dispatch) => {
        dispatch({
            type: "DEPOSIT",
            payload: amount,
        })
    }
}

// the amount parameter will be given from components
export const withdrawMoney = (amount) =>{
    return (dispatch) => {
        dispatch({
            type: "WITHDRAW",
            payload: amount,
        })
    }
}