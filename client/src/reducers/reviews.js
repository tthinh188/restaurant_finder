const reviewsReducer = (reviews = [], action) => {
    switch (action.type) {
        case 'GET_REVIEWS':
            return action.payload;
        case 'CREATE_REVIEW':
            return [action.payload.data, ...reviews];
        default:
            return reviews;
    } 
}

export default reviewsReducer;