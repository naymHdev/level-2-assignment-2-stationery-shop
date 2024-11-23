import mongoose, { Document, model } from 'mongoose';
import { IStationaryProduct } from '../products/product.interface';

//  Create a product order Interface
interface IOrder extends Document {
  email: string;
  product: mongoose.Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

//  Create a order Schema
const OrderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required for parching product'],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email',
      ],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'StationeryProductModel',
      required: [true, 'Product is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Product Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Product total price is required'],
      min: [0, "Total price can't be negative"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// pre-save middleware to calculate the product total price and find product order by ID
OrderSchema.pre('save', async function (next) {
  if (this.isModified('quantity') && this.isModified('product')) return next();

  const product = await mongoose
    .model<IStationaryProduct>('StationeryProductModel')
    .findById(this.product);
  if (!product) throw new Error('Product not found');

  this.totalPrice = product.price * this.quantity;
  next();
});

const OrderModel = model<IOrder>('Orders', OrderSchema);

export default OrderModel;
