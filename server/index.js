import express from 'express';
import restaurantsRoutes from './routes/restaurantsRoute.js';
import reviewRoutes from './routes/reviewsRoute.js';
import cors from 'cors';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/restaurants', restaurantsRoutes);
app.use('/api/v1/reviews', reviewRoutes)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})