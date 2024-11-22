import { Request, Response } from 'express';
import { stationeryProductServices } from './product.service';

// Creating a product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const result =
      await stationeryProductServices.createStationeryProductIntoDB(
        productData,
      );

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Product created failed!',
      errors: error.message || error,
    });
  }
};

// Get All Stationery Products
const getAllStationeryProducts = async (req: Request, res: Response) => {
  try {
    const result = await stationeryProductServices.getAllProducts();

    res.status(201).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Product retrieved failed!',
      errors: error.message || error,
    });
  }
};

// Get Single Stationery Products
const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await stationeryProductServices.getSingleProduct(productId);

    res.status(201).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Product retrieved failed!',
      errors: error.message || error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllStationeryProducts,
  getSpecificProduct,
};
