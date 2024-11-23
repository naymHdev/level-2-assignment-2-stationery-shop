import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/', orderController.createOrderController);
router.get('/revenue', orderController.calculateRevenueController);
router.get('/', orderController.getAllOrders);

export const OrderProductRoutes = router;
