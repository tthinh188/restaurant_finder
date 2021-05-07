import React, { useState, useEffect } from 'react'
import './RestaurantDetail.css';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { getReviews, createReview } from '../action/reviews';
import ReviewCard from './ReviewCard';
import FlipMove from "react-flip-move";

function RestaurantDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const restaurants = useSelector((state) => state.restaurants);
    const reviews = useSelector(state => state.reviews);

    const selectedRestaurant = restaurants.filter(restaurant => restaurant.id === parseInt(id));

    useEffect(() => {
        dispatch(getReviews(id));
    }, [dispatch, id])


    const [rating, setRating] = useState(0);
    const [reviewerName, setReviewerName] = useState('');
    const [review, setReview] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        const createdReview = {
            name: reviewerName,
            review: review,
            rating: rating,
        }

        dispatch(createReview(id, createdReview));
        clear();
    }

    const clear = () => {
        setReviewerName('');
        setRating(0);
        setReview('');
    }

    return (
        <div className="restaurantDetail">

            {selectedRestaurant &&
                <div className="restaurantDetail_title">
                    <h1>{selectedRestaurant[0]?.name}</h1>
                    <Rating
                        name="disabled"
                        style={{ opacity: 1 }}
                        value={selectedRestaurant[0]?.average_rating}
                        precision={0.5}
                        disabled
                        emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                </div>
            }


            <form onSubmit={handleSubmit} className="restaurantReview">
                <div className="restaurantReview_row">
                    <p>Reviewer's name:</p>
                    <input value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} type='text' id="reviewer" />
                </div>
                <div className="restaurantReview_row">
                    <p>Review:</p>
                    <input value={review} onChange={(e) => setReview(e.target.value)} type='text' id="review" />
                </div>

                <div className="restaurantReview_row">
                    <p>Rating</p>
                    <Rating
                        required
                        name="rating"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                </div>

                <Button disabled={!rating || !reviewerName || !review} type="submit" variant="contained" color="primary">Submit</Button>
            </form>

            <div>
                <FlipMove>
                    {reviews?.map(review => (
                        <ReviewCard
                            key={review.id}
                            revierName={review?.name}
                            review={review?.review}
                            rating={review?.rating}
                        />
                    ))}
                </FlipMove>
            </div>
        </div>
    )
}

export default RestaurantDetail
