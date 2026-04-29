const express = require('express');
const workoutRouter = express.Router();
const { getSplits, getSplit } = require('../database/db');


workoutRouter.get('/', (req, res) => {
    res.send(JSON.stringify(getSplits(), null, 4));
});

workoutRouter.get('/:split', (req, res) => {
    const { split } = req.params;
    if (getSplit(split)) {
        res.send(JSON.stringify(getSplit(split), null, 4));
    } else {
        res.status(404).send("Workout not found");
    }
});

module.exports = workoutRouter;