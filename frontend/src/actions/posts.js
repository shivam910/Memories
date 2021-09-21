import * as api from "../api";

// Action Creators -> are function that return an action
export const getPosts = () => async (dispatch) => {

    try {
        const {data} = await api.fetchPosts();
        dispatch ({type: 'FETCH_ALL',
                    payload: data
        }); //in redux thunk instead of returning it we actually need to dispatch it
    } catch (error) {
        console.log(error.message);
    }

//   const action = {
//     type: "FETCH_ALL",
//     payload: [], //payload is the data where we store all of our posts
//   };
};

// We are working with asynchronus data to actually fetch all the posts sometime it gonna have to pass and for this we have to use redux thunk
// Redux thunk allows us to in hear speacify an additional arrow function

export const createPost = (post) =>async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);
        dispatch({type:'CREATE', 
                  payload: data})
    } catch (error) {
        console.log(error.message)
    }
};

export const updatePost = (id, post) => async (dispatch) =>{
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}