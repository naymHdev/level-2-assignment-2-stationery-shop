import { Model } from 'mongoose';

export interface IStationaryProduct {
  id: string;
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

// For creating static
export interface IStationeryProductModel extends Model<IStationaryProduct> {
  isProductExists(id: string): Promise<IStationaryProduct | null>;
}
