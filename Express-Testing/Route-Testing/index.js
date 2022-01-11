const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/gameRoutes.js')

const app = express();

app.use(express.json());
app.use(cors());

let dbURI = "games";
// let dbURI = "testGames"; Test DB URI

mongoose.connect(`mongodb://localhost:27017/${dbURI}`, { useNewUrlParser: true },
    (error) => {
        if (error) {
            console.log("Can't connect to database.");
        } else if (!error) {
            console.log("Connected successfully.");
        }
    });

app.use('/game/', gameRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(404).send(err.message);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(405).send(err.message);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(err.message);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(403).send(err.message);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(401).send(err.message);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(501).send(err.message);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(502).send(err.message);
});

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port ${server.address().port}.`);
});