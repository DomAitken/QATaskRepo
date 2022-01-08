const router = require('express').Router();

router.get("/readAll", (req, res) => {
    console.log("Read all accessed.");
    res.status(202).send("Read all accessed.");
});

module.exports = router;