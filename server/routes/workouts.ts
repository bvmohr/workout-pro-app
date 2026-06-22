import { Router, Request, Response } from 'express';
import { getSplits, getSplit } from '../models/db';

const workoutRouter = Router();

workoutRouter.get('/', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(getSplits(), null, 4));
});

workoutRouter.get('/:split', (req: Request, res: Response) => {
    const { split } = req.params;
    const splitData = getSplit(split as string);
    if (splitData) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(splitData, null, 4));
    } else {
        res.status(404).send("Workout not found");
    }
});

export default workoutRouter;
