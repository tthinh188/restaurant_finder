import React from 'react';
import './RestaurantList.css';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { deleteRestaurant } from '../action/restaurants';
import { useHistory } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder'

function RestaurantList() {
    const restaurants = useSelector((state) => state.restaurants);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        !restaurants.length ? <CircularProgress /> : (
            <div className="restaurantList">
                <table className="restaurantList_table">
                    <thead>
                        <tr className="restaurantList_row">
                            <th>Restaurant</th>
                            <th>Location</th>
                            <th>Price Range</th>
                            <th>Review</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {restaurants ? restaurants.map(restaurant => (
                            <tr key={restaurant.id} className="restaurantList_row">
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td onClick={() => history.push(`/restaurants/${restaurant.id}`)} className="restaurantList_rowRating">
                                    {restaurant.average_rating ? (<Rating
                                        name="disabled"
                                        value={restaurant.average_rating}
                                        disabled
                                        precision={0.5}
                                        className="restaurant_rating"
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />) : <Rating
                                        name="disabled"
                                        className="restaurant_rating"
                                        value={0}
                                        precision={0.5}
                                        disabled
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />}
                                    <p>{restaurant.review_count ? `(${restaurant.review_count})` : `(0)`}</p>
                                </td>
                                <td><Button onClick={() => history.push(`/restaurants/${restaurant.id}/update`)} variant="contained" color="primary">Edit</Button></td>
                                <td><Button onClick={() => dispatch(deleteRestaurant(restaurant.id))} variant="contained" color="secondary">Delete</Button></td>
                            </tr>
                        )) : null}
                    </tbody>
                </table>
            </div>
        )
    )
}

export default RestaurantList
