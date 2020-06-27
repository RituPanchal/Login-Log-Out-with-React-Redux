const loadingReducer = (initial = {}, action) => {
    switch (action.type) {
        case "loading_status_fetchData":
            return { ...initial, fetchData: action.payload };
        case "loading_status_fetchGoogleAuth":
            return { ...initial, fetchGoogleAuth: action.payload };
        default:
            return initial;
    }
}

export default loadingReducer;