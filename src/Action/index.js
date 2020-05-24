import axios from 'axios';

export const fetchPostsAction = () => {
    return async (dispatch) => {
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({ type: "POST_LIST", payload: response.data });
    }
}

export const fetchUserAction = (id) => {
    return async (dispatch) => {
        let userresponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: "USER_LIST", payload: userresponse.data});
    }
}