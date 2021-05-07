import React, { useState } from 'react'
import './RestaurantUpdate.css';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateRestaurant } from '../action/restaurants';


function RestaurantUpdate() {
    const { id } = useParams();
    const restaurants = useSelector((state) => state.restaurants);
    const selectedRestaurant = restaurants.filter(restaurant => restaurant.id === parseInt(id));

    const [name, setName] = useState(selectedRestaurant[0]?.name);
    const [location, setLocation] = useState(selectedRestaurant[0]?.location);
    const [priceRange, setPriceRange] = useState(selectedRestaurant[0]?.price_range);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRestaurant = {
            id: parseInt(id),
            name: name,
            location: location,
            price_range: priceRange,
        }

        dispatch(updateRestaurant(newRestaurant.id, newRestaurant))
        history.push('/');
        clear();
    }

    const clear = () => {
        setName('');
        setLocation('');
        setPriceRange('');
    }

    return (
        <form onSubmit={handleSubmit} className="restaurantUpdate">
            <input value={name} onChange={(e) => setName(e.target.value)} required type="text" placeholder="Name" />
            <input value={location} onChange={(e) => setLocation(e.target.value)} required type="text" placeholder="Location" />
            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} required className="addRestaurant_select">
                <option value="" disabled>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
            </select>
            <Button type="submit" variant="contained" color="primary">Update</Button>
        </form>
    )
}

export default RestaurantUpdate
