import { combineReducers } from 'redux';

import restaurants from './restaurants';
import reviews from './reviews'

export const reducers = combineReducers({ restaurants, reviews });