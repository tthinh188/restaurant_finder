const restaurantReducer = (restaurants = [], action) => {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload;
        case 'GET_ONE':
            return action.payload;
        case 'CREATE':
            return [...restaurants, action.payload.data];
        case 'DELETE':
            return restaurants.filter(restaurant => restaurant.id !== action.payload)
        case 'UPDATE':
            return restaurants.map(restaurant => restaurant.id === action.payload.id ? action.payload: restaurant);
        default:
            return restaurants;
    }
}

export default restaurantReducer