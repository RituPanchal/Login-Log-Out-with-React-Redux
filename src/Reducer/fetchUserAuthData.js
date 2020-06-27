const fetchUserAuthDataReducer = (initial = {}, action) => {
    switch (action.type) {
        case "user_data":
            return action.payload;
        default:
            return initial;
    }
}

export default fetchUserAuthDataReducer;