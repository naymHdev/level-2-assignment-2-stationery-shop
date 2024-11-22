import { Request, Response } from 'express';
import { stationeryProductServices } from './product.service';
import productValidationSchema from './product.validation';

// Creating a product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // Schema validation use Zod
    const dataValidationZod = productValidationSchema.parse(productData);

    const result =
      await stationeryProductServices.createStationeryProductIntoDB(
        dataValidationZod,
      );

    res.status(201).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Product created failed!',
      success: false,
      errors: error.message || error,
    });
  }
};

// Get All Stationery Products with query
const getAllStationeryProducts = async (req: Request, res: Response) => {
  try {
    const result = await stationeryProductServices.getAllProducts();

    res.status(201).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Product retrieved failed!',
      success: false,
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
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Product retrieved failed!',
      success: false,
      errors: error.message || error,
    });
  }
};

// update method
const updateSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProduct = req.body;

    const result = await stationeryProductServices.updateSpecificProduct(
      productId,
      updatedProduct,
    );

    res.status(201).json({
      message: 'Products updated successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Product updated failed!',
      success: false,
      errors: error.message || error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllStationeryProducts,
  getSpecificProduct,
  updateSingleProducts,
};
