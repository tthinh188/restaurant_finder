import express from 'express';

import { getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from '../controller/restaurantsController.js';

const router = express.Router();

router.get('/', getRestaurants);
router.get('/:id', getRestaurant);
router.post('/', createRestaurant);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

export default router;