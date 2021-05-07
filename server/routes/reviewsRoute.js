import express from 'express';

import { getReviewsForRestaurant, createReview } from '../controller/reviewsController.js';

const router = express.Router();

router.get('/:id', getReviewsForRestaurant);
router.post('/:id', createReview);

export default router;