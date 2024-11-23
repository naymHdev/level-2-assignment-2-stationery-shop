import mongoose from 'mongoose';
import { z } from 'zod';

export const orderValidation = z.object({
  email: z.string().email('Invalid email address'),
  product: z.string().refine((id) => mongoose.isValidObjectId(id), {
    message: 'Invalid product ID',
  }),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .positive('Quantity must be greater than 0'),
  totalPrice: z.number().nonnegative('Total price cannot be negative'),
});
