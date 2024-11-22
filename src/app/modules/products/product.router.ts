import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/create-products', ProductControllers.createProduct);
router.get('/create-products', ProductControllers.getAllStationeryProducts);
router.get(
  '/create-products/:productId',
  ProductControllers.getSpecificProduct,
);

export const StationeryProductRoutes = router;
