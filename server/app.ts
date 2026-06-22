import express, { Request, Response } from 'express';
import cors from 'cors';
import session from 'express-session';
import path from 'path';
import apiRouter from './routes/api';

const app = express();
const distPath = __dirname.endsWith('dist')
    ? path.join(__dirname, "../../client/dist")
    : path.join(__dirname, "../client/dist");

// Server setup
app.use(cors());
app.use(express.json());
app.use(session({
    secret: "fingerprint",
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(distPath));

// Configure routing
app.use('/api', apiRouter);

// Serve front-end for any non-API request (to support client-side React Router routing)
app.get(/.*/, (req: Request, res: Response) => {
    res.sendFile(path.join(distPath, "index.html"));
});

export default app;
