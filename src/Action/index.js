import { databas, auth, googleauth } from '../firebase';
import history from "../History/index";

//DATABASE
export const pushData = (data) => {
    return async (dispatch) => {
        databas.push(data);
    }
}

export const fetchData = () => {
    return async (dispatch) => {
        dispatch({type: "loading_status_fetchData", payload: true})
        await databas.on("value", (snapshot) => {
            let items = snapshot.val(); 
            dispatch({ type: "fetch_data", payload: items })
            dispatch({type: "loading_status_fetchData", payload: false})
        })
    }
}

export const removeData = (id) => {
    return async (dispatch) => {
        await databas.child(id).remove();
    }
}

//AUTHENTICATION
//to sign in
export const googleAuthAction = () => {
    return async (dispatch) => {
        await auth.signInWithPopup(googleauth);
        history.push("/home");
        window.location.reload();
    }
}


//to fetch sign in user details
export const fetchGoogleAuthDetailsAction = () => {
    return async (dispatch) => {
        dispatch({type: "loading_status_fetchGoogleAuth", payload: true})
        await auth.onAuthStateChanged(userdata => {
            dispatch({ type: "user_data", payload: userdata })
            dispatch({type: "loading_status_fetchGoogleAuth", payload: false})  
        })
    }
}

//to sign out
export const googleSignOut = () => {
    return async (dispatch) => {
        await auth.signOut();
    }
}