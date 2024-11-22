import { Model } from 'mongoose';

export interface IStationaryProduct {
  name: string;
  brand: string;
  price: number;
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology';
  description: string;
  quantity: number;
  inStock: boolean;
}

export interface IStationeryProductModel extends Model<IStationaryProduct> {
  isUserExists(_id: string): Promise<IStationeryProductModel | null>;
}
