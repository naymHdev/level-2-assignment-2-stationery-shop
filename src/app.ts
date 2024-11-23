import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StationeryProductRoutes } from './app/modules/products/product.router';
import { OrderProductRoutes } from './app/modules/order/order.routes';
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// ALl  product routes
app.use('/api/products', StationeryProductRoutes);

// All product order routes
app.use('/api/orders', OrderProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello dev!');
});

export default app;
