import { IStationaryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

// create a product use static method
const createStationeryProductIntoDB = async (product: IStationaryProduct) => {
  const result = await StationeryProductModel.create(product);
  return result;
};

// Get all products with optional search functional
const getAllProducts = async () => {
  const result = await StationeryProductModel.find();
  return result;
};

// get single products by id
const getSingleProduct = async (id: string) => {
  const result = await StationeryProductModel.findOne({ _id: id });
  return result;
};

// Update id base single product

const updateSpecificProduct = async (
  id: string,
  updatedProduct: Record<string, any>,
) => {
  const result = await StationeryProductModel.updateOne(
    { _id: id },
    {
      $set: updatedProduct,
    },
  );
  return result;
};

// create data into database and get products data from database
export const stationeryProductServices = {
  createStationeryProductIntoDB,
  getAllProducts,
  getSingleProduct,
  updateSpecificProduct,
};
