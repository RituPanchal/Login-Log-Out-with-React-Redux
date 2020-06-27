const fetchDataReducer = (Initial_val = {}, action) => {
    switch (action.type) {
        case "fetch_data":
            return action.payload;
        default:
            return Initial_val;
    }
}

export default fetchDataReducer;