import { model, Schema } from 'mongoose';
import {
  IStationaryProduct,
  IStationeryProductModel,
} from './product.interface';

const stationeryProductSchema = new Schema<
  IStationaryProduct,
  IStationeryProductModel
>(
  {
    id: { type: String, required: true, unique: true },
    name: {
      type: String,
      required: [true, 'Product name must be required!'],
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

export const StationeryProductModel = model<
  IStationaryProduct,
  IStationeryProductModel
>('StationaryProduct', stationeryProductSchema);
