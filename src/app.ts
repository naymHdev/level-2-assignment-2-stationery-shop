import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StationeryProductRoutes } from './app/modules/products/product.router';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// ALl  Application routes
app.use('/api/products', StationeryProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello dev!');
});

export default app;
