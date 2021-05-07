import * as api from '../api/axios.js';

export const getReviews = (id) => async (dispatch) => {
    try {
        const { data } = await api.getReviews(id);

        dispatch({
            type: 'GET_REVIEWS',
            payload: data,
        })
    } catch (error) {
        console.log(error.message);
    }
}

export const createReview = (id, review) => async (dispatch) => {
    try {
        const { data } = await api.createReview(id, review);
        dispatch({
            type: 'CREATE_REVIEW',
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
}