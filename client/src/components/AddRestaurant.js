import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import './AddRestaurant.css';
import { useDispatch } from 'react-redux'
import { createRestaurant } from '../action/restaurants';


function AddRestaurant() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const restaurant = {
            name: name,
            location: location,
            price_range: priceRange,
        }
        dispatch(createRestaurant(restaurant));
        // console.log(restaurant)
        clear();
    }

    const clear = () => {
        setName('');
        setLocation('');
        setPriceRange('');
    }

    return (
        <div className="addRestaurant">
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} required type="text" className="addRestaurant_input" placeholder="Name" />
                <input value={location} onChange={(e) => setLocation(e.target.value)} required type="text" className="addRestaurant_input" placeholder="Location" />
                <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} required className="addRestaurant_select">
                    <option value="" disabled>Price Range</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                    <option value="5">$$$$$</option>
                </select>
                <Button type="submit" variant="contained" color="primary">Add</Button>
            </form>
        </div>
    )
}

export default AddRestaurant
