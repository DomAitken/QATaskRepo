const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/gameRoutes.js')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/db_games', {useNewUrlParser: true}, 
(error) => {
    if (error) {
        console.log("Can't connect to database.");
    } else if (!error) {
        console.log("Connected successfully.");
    }
});

app.use('/game/', gameRoutes);

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port ${server.address().port}.`);
});
