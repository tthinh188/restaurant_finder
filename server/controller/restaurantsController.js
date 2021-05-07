import db from '../database/mysql.js';
import util from 'util';

const query = util.promisify(db.query).bind(db);

export const getRestaurants = async (req, res) => {
    try {
        const result = await query('SELECT * FROM restaurants LEFT JOIN ( SELECT restaurant_id, COUNT(*) as review_count, AVG(rating) as average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id =  reviews.restaurant_id');

        res.status(200).json(result);
    } catch (error) {
        res.status(400);
    }
}

export const getRestaurant = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await query(`SELECT * FROM restaurants WHERE id=${id}`);
        
        res.status(200).json(result);
    } catch (error) {
        res.status(400);
    }
}

export const createRestaurant = async (req, res) => {
    const restaurant = req.body;

    try {
        const insertQuery = await query(`INSERT INTO restaurants (name, location, price_range) VALUES ('${restaurant.name}', '${restaurant.location}', ${restaurant.price_range})`);
        
        const result = await query(`SELECT * FROM restaurants WHERE id=${insertQuery.insertId}`)

        const addedRestaurant = { 
            id: insertQuery.insertId,
            name: result[0].name,
            location: result[0].location,
            price_range: result[0].price_range
        }

        res.status(201).json({
            data: addedRestaurant});
    } catch (error) {
        res.status(400);
    }
}

export const updateRestaurant = async (req, res) => {
    const restaurant = req.body;
    const { id } = req.params;

    try {
        await query(`UPDATE restaurants SET name = '${restaurant.name}', location = '${restaurant.location}', price_range = ${restaurant.price_range} WHERE id = ${id}`);

        res.status(202).json(restaurant);
    } catch (error) {
        res.status(400);
    }
}

export const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        await query(`DELETE FROM restaurants WHERE id=${id}`);

        res.status(204).send();
    } catch (error) {
        res.status(400);
    }
}