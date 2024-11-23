import { IStationaryProduct } from './product.interface';
import { StationeryProductModel } from './product.model';

// create a product
const createStationeryProductIntoDB = async (product: IStationaryProduct) => {
  const result = await StationeryProductModel.create(product);
  return result;
};

// Get all products with search functional
const getAllProducts = async (searchTerm?: string) => {
  const filter = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};

  const result = await StationeryProductModel.find(filter);
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
  updatedProduct: Partial<IStationaryProduct>,
) => {
  const result = await StationeryProductModel.findByIdAndUpdate(
    { _id: id },
    {
      $set: updatedProduct,
    },
    { new: true, runValidators: true },
  );
  return result;
};

// Deleted specific product by id
const deletedProduct = async (id: string) => {
  const result = await StationeryProductModel.deleteOne({ _id: id });
  return result;
};

// create data into database and get products data from database
export const stationeryProductServices = {
  createStationeryProductIntoDB,
  getAllProducts,
  getSingleProduct,
  updateSpecificProduct,
  deletedProduct,
};
