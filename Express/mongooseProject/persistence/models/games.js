const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userReviewsSchema = new Schema({ name: String, review: Number });

const gameSchema = new Schema({
    gameName: {
        type: String,
        required: false,
        minlength: 2
    },
    genre: {
        gameType: String,
        required: true,
        minlength: 3
    },
    price: {
        priceType: Number,
        required: true,
        min: [0, 'Minimum is 0']
    },
    isGood: Boolean,
    userReviews: [userReviewsSchema],
    user: {
        userName: String,
        review: {
            type: Number,
            min: [0, 'Minimum is 0'],
            max: [10, 'Maximum is 10']
        }
    }
});

const Game = model('Game', gameSchema);

module.exports = { 'Game': Game };