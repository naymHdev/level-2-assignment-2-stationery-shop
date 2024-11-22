import { IStationaryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

// create a product use static method
const createStationeryProductIntoDB = async (
  productData: IStationaryProduct,
) => {
  if (await StationeryProductModel.isUserExists(productData.id)) {
    throw new Error('Same product already added');
  }
  const result = await StationeryProductModel.create(productData);
  return result;
};

// Get all products

const getAllProducts = async () => {
  const result = await StationeryProductModel.find();
  return result;
};

// get products use id
const getSingleProduct = async (id: string) => {
  const result = await StationeryProductModel.findOne({ id });
  return result;
};

// create data into database and get products data from database
export const stationeryProductServices = {
  createStationeryProductIntoDB,
  getAllProducts,
  getSingleProduct,
};
