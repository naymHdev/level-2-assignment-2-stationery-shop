/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.service';
import { orderValidation } from './order.validation';

// Create order controller
const createOrderController = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    // Validation order use Zod
    const validatedOrders = orderValidation.parse(order);

    const result = await orderService.createOrder(validatedOrders);
    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Order creation failed',
      success: false,
      errors: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

// Create a get controller for find all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrders();
    res.status(200).json({
      success: true,
      message: 'Successfully find all orders',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Orders find failed!',
      errors: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

// Calculate Revenue from Orders
const calculateRevenueController = async (req: Request, res: Response) => {
  try {
    const result = await orderService.calculateRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: 'Revenue calculated failed',
      success: false,
      errors: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

export const orderController = {
  createOrderController,
  calculateRevenueController,
  getAllOrders,
};
