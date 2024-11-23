import OrderModel from './order.schema';
import { StationeryProductModel } from '../products/product.model';

const createOrder = async (orderData: {
  email: string;
  product: string;
  quantity: number;
}): Promise<any> => {
  const { email, product, quantity } = orderData;

  const productDoc = await StationeryProductModel.findById(product);

  if (!productDoc) throw new Error('Product not found');

  // Handle insufficient stock
  if (productDoc.quantity < quantity) {
    throw new Error('Insufficient stock for this product');
  }

  //   calculate total price
  const totalPrice = productDoc.price * quantity;

  // create the order
  const newOrder = new OrderModel({
    email,
    product,
    quantity,
    totalPrice,
  });

  //   Save order in DB
  await newOrder.save();

  //   updated inventory
  productDoc.quantity -= quantity;
  productDoc.inStock = productDoc.quantity > 0;
  await productDoc.save();

  return newOrder;
};

// Calculate Revenue from Orders
const calculateRevenue = async (): Promise<any> => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: 'totalPrice' },
      },
    },
  ]);

  const totalRevenue = result[0]?.totalRevenue || 0;

  return { totalRevenue };
};

export const orderService = { createOrder, calculateRevenue };
