/* eslint-disable @typescript-eslint/no-explicit-any */
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
      errors: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

// Get All Stationery Products with query
const getAllStationeryProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await stationeryProductServices.getAllProducts(
      searchTerm as string,
    );

    res.status(201).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Product retrieved failed!',
      success: false,
      errors: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
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
      errors: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
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
      errors: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

// Product deleted method
const getDeleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    await stationeryProductServices.deletedProduct(productId);

    res.status(200).json({
      message: 'Product deleted successfully',
      success: true,
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Product deleted Failed!',
      success: false,
      errors: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllStationeryProducts,
  getSpecificProduct,
  updateSingleProducts,
  getDeleteProduct,
};
