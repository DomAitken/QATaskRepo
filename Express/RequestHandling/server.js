const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(5015, () => {
    console.log("Server Started.");
})

app.use((req, res, next) => {
    console.log("First piece of middleware.");
    next();
});

app.use((req, res, next) => {
    console.log(Date());
    next();
});

const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

app.get('/nested', logger, nested, (req, res) => {
    console.log("Request fired.");
    res.send("nested middleware fired.");
});

app.get('/', (req, res) => {
    console.log("Basic middleware.");
    res.send("Site Accessed.");
});

app.post('/post', (req, res) => {
    res.send("Posted data.");
});

let m = new Date();
    let dateString =
        m.getUTCFullYear() + "/" + ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" + ("0" + m.getUTCDate()).slice(-2) + " " + ("0" + m.getUTCHours()).slice(-2) + ":" + ("0" + m.getUTCMinutes()).slice(-2) + ":" + ("0" + m.getUTCSeconds()).slice(-2); 
    console.log(dateString);


