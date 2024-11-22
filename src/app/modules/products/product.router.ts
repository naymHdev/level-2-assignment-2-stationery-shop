import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getAllStationeryProducts);
router.get('/:productId', ProductControllers.getSpecificProduct);

export const StationeryProductRoutes = router;
