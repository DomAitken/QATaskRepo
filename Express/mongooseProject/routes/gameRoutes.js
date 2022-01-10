const router = require('express').Router();

const { Game } = require('../persistence/models/games.js')

router.get("/getAll", (req, res, next) => {
    Game.find((error, games) => {
            res.status(200).send(games);
            console.log(req.body);
        })
        .catch((error) => { //ERROR HANDLING
            const err = new Error(`Object must exist.`);
            next(err);
        })
});

router.post('/post', (req, res, next) => {
    console.log(req.body);
    const game = new Game(req.body);
    game.save().then((result) => {
            res.status(201).send(`${games.gameName} added to database.`)
        })
        .catch((error) => { //ERROR HANDLING
            const err = new Error(`Object must exist.`);
            next(err);
        })
});

router.get('/get/:id', (req, res, next) => {
    console.log(req.params.id);
    Game.findById(req.params.id, (game, error) => {
            res.status(200).send(game);
        })
        .catch((error) => { //ERROR HANDLING
            const err = new Error(`Object must exist.`);
            next(err);
        })
});

router.delete('/delete/:id', (req, res, next) => {
    Game.findByIdAndDelete(req.params.id, (error) => {
            res.status(204);
        })
        .catch((error) => { //ERROR HANDLING
            const err = new Error(`Object must exist.`);
            next(err);
        })
});

router.post('/create', (req, res, next) => {
    const body = req.body;
    console.log(body);
    const game = new Game(body);
    game.save().then((result) => {
            res.status(201).send(`${result.gameName} has been added.`);
        })
        .catch((error) => { //ERROR HANDLING
            const err = new Error(`Object requires a name.`);
            next(err);
        })
});

module.exports = router;