const PostListReducer = (INITIAL_STATE = [], action) => {
    switch (action.type) {
        case "POST_LIST":
            return action.payload;
        default:
            return INITIAL_STATE;
    }
}

export default PostListReducer;