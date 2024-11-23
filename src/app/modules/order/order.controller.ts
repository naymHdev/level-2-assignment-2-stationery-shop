import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrderController = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOrder(order);
    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Order creation failed',
      success: false,
      errors: error.message,
    });
  }
};

export const orderController = {
  createOrderController,
};
