const router = require('express').Router();

const { Game } = require('../persistence/models/games.js')

router.get("/getAll", (req, res) => {
    Game.find((error, games) => {
        res.status(200).send(games);
    });
});

router.post('/post', (req, res) => {
    console.log(req.body);
    const game = new Game(req.body);
    game.save().then((result) => {
        res.status(201).send(`${games.gameName} added to database.`)
    });
});

router.get('/get/:id', (req, res) => {
    console.log(req.params.id);
    Game.findById(req.params.id, (game, error) => {
        res.status(200).send(game);
    });
});

router.delete('/delete/:id', (req, res) => {
    Game.findByIdAndDelete(req.params.id, (error) => {
        res.status(204);
    });
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
})

module.exports = router;