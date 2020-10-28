export const initialState = {
    fetchTweet: false,
};

export const actionTypes = {
    GET_TWEET: "GET_TWEET",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_TWEET:
            return {
                ...state,
                fetchTweet: action.fetchTweet
            };
        default:
            return state;
    }
};

export default reducer;