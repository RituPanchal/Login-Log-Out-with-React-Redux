const userListReducer = (INITIAL_STATE = [], action) => {
    switch (action.type) {
        case "USER_LIST":
            return [...INITIAL_STATE, action.payload];
        default:
            return INITIAL_STATE;
    }
}

export default userListReducer;