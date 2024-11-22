import { z } from 'zod';

// Zod schema for core validations

const productValidationSchema = z.object({
  name: z.string({
    required_error: 'Product name must be required',
  }),
  brand: z.string({
    required_error: 'Product brand name must be required',
  }),
  price: z
    .number({
      required_error: 'Product price must be required',
    })
    .min(0, { message: 'Price must be greater than or equal to 0' }),
  category: z.enum(
    ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
    { required_error: 'Category must be required' },
  ),
  description: z.string({
    required_error: 'Description must be required',
  }),
  quantity: z
    .number({
      required_error: 'Quantity is required',
    })
    .min(0, { message: 'Quantity must be greater than or equal to 0' }),
  inStock: z.boolean({
    required_error: 'inStock Filed is required',
  }),
});

export default productValidationSchema;
