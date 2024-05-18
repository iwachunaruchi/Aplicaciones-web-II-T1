import express, { Request, Response, NextFunction } from 'express';
import api from './api';

const port = 3000;

const app = express();

app.use('/api', api);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: 'Error. Route not found',
    });
});

export default app;


