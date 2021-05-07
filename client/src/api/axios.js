import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

export const getAllRestaurants = () => API.get('/restaurants');
export const getOneRestaurant = (id) => API.get(`/restaurants/${id}`);
export const createRestaurant = (newRestaurant) => API.post('/restaurants', newRestaurant);
export const updateRestaurant = (id, updatedRestaurant) => API.put(`/restaurants/${id}`, updatedRestaurant);
export const deleteRestaurant = (id) => API.delete(`/restaurants/${id}`);

export const getReviews = (id) => API.get(`/reviews/${id}`);
export const createReview = (id, review) => API.post(`/reviews/${id}`, review);