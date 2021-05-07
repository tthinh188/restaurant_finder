import * as api from '../api/axios.js';

// create post action.
export const getAllRestaurants = () => async (dispatch) => {
    try {
        const { data } = await api.getAllRestaurants();

        dispatch({
            type: 'GET_ALL',
            payload: data,
        });

    } catch (error) {
        console.log(error.message);
    }
}

export const getOneRestaurant = (id) => async (dispatch) => {
    try {
        const { data } = await api.getOneRestaurant(id);
        dispatch({
            type: 'GET_ONE',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }

}

export const createRestaurant = (restaurant) => async (dispatch) => {
    try {
        const { data } = await api.createRestaurant(restaurant);
        dispatch({
            type: 'CREATE',
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateRestaurant = (id, restaurant) => async (dispatch) => {
    try {
      const { data } = await api.updateRestaurant(id, restaurant);

      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
export const deleteRestaurant = (id) => async (dispatch) => {
    try {
        await api.deleteRestaurant(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
};