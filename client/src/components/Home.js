import React, { useEffect } from 'react';
import './Home.css';
import RestaurantList from './RestaurantList';
import AddRestaurant from './AddRestaurant';
import { getAllRestaurants } from '../action/restaurants';
import { useDispatch } from 'react-redux';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRestaurants());
    }, [dispatch])

    return (
        <div className="home">
            <div className="home_addRestaurant">
                <AddRestaurant />
            </div>
            <div className="home_details">
                <RestaurantList />
            </div>
        </div>
    )
}

export default Home
