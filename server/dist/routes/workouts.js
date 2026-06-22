"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../models/db");
const workoutRouter = (0, express_1.Router)();
workoutRouter.get('/', (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify((0, db_1.getSplits)(), null, 4));
});
workoutRouter.get('/:split', (req, res) => {
    const { split } = req.params;
    const splitData = (0, db_1.getSplit)(split);
    if (splitData) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(splitData, null, 4));
    }
    else {
        res.status(404).send("Workout not found");
    }
});
exports.default = workoutRouter;
