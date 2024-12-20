import { model, Schema } from 'mongoose';
import { IStationaryProduct } from './product.interface';

const stationeryProductSchema = new Schema<IStationaryProduct>(
  {
    name: {
      type: String,
      required: [true, 'ValidationError'],
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price must be a positive number'],
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
    timestamps: true,
    versionKey: false,
  },
);

// stationeryProductSchema.virtual('');

export const StationeryProductModel = model<IStationaryProduct>(
  'StationeryProductModel',
  stationeryProductSchema,
);
