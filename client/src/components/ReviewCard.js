import React, { forwardRef } from 'react'
import './ReviewCard.css';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder'

const ReviewCard = forwardRef(({ revierName, review, rating }, ref) => {
    return (
        <div ref={ref} className="reviewCard">
            <h3 className="reviewCard_name">{revierName}</h3>
            <p><Rating
                name="disabled"
                style={{ opacity: 1 }}
                value={rating}
                precision={0.5}
                disabled
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
            /></p>
            <p className="reviewCard_review">{review}</p>
        </div>
    )
})

export default ReviewCard
