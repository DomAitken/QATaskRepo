const express = require('express');

const app = express();

app.get("/hello", () => {
   return console.log("Site Accessed.");
})

app.delete("/delete", () => {
   return console.log("Item deleted.");
})

app.post("/created", () => {
   return console.log("Item Created.");
});

app.put("/updated", () => {
   return console.log("Item Updated.");
});

const server = app.listen(5015, () => {
   console.log(`Server started on port ${server.address().port}`);
});

//Requests
app.get('/get', (req) => {
   console.log(req.query);
   console.log(req.query.species);
})

app.post('/newSnake', (req, res) => {
   console.log(req);
   const body = req.body();
   console.log(body);
   res.send("hello");
})