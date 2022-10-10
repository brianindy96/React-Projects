import store from "../store";

// fetches post
export const fetch_post = () =>{
    return{
        type: "FETCH_USER"
    }
}

// once received post
export const receive_post = post =>{
    return{
        type: "FETCHED_USER",
        data: post,
    }
}

export const receive_error = () =>{
    return{
        type: "RECEIVE_ERROR"
    }
}

export const thunk_action_creator = username => {
    // removes white space of username 
    const user = username.replace(/\s/g, "")
    store.dispatch(fetch_post());
    // onced dispatched, executes the following function
    return function(dispatch, getState){
        return fetch(`https://api.github.com/users/${user}`)
            //fetched data and convert into json 
            .then(data => data.json())
            // check conditions of the data's json
            .then(data => {
                if(data.message === "Not Found"){
                    throw new Error("No such user found!");
                } else dispatch(receive_post(data))
            })
            // if there is any error; dispatch(receive_error)
            .catch(err => dispatch(receive_error));
    }
}