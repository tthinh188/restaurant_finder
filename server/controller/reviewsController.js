import db from '../database/mysql.js';
import util from 'util';

const query = util.promisify(db.query).bind(db);

export const getReviewsForRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await query(`SELECT * FROM reviews WHERE restaurant_id=${id} ORDER BY id DESC`);

        res.status(200).json(result);
    } catch (error) {
        res.status(400);
    }
}

export const createReview = async (req, res) => {
    const { id } = req.params;
    const review = req.body;

    try {
        const insertQuery = await query(`INSERT INTO reviews (name, review, rating, restaurant_id) VALUES ('${review.name}', '${review.review}', ${review.rating}, ${parseInt(id)})`);

        const result = await query(`SELECT * FROM reviews WHERE id=${insertQuery.insertId}`)

        const addedReview = { 
            id: insertQuery.insertId,
            name: result[0].name,
            review: result[0].review,
            rating: result[0].rating,
            restaurent_id: result[0].restaurant_id,
        }

        res.status(201).json({
            data: addedReview});
    } catch (error) {
        res.status(400);
    }
}