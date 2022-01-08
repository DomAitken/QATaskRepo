const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const lizardRoutes = require('./routes/lizardRoutes.js');
app.use('/lizard', lizardRoutes);

const server = app.listen(5015, () => {
    console.log(`Server started successfully on port ${server}.`)
});