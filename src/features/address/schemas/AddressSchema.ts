import { z } from 'zod';

export const AddressSchema = z.object({
  street: z.string().min(3, 'Street must be at least 3 characters long'),
  city: z.string().min(3, 'City must be at least 3 characters long'),
  zipcode: z.string().min(3, 'Zip code must be at least 5 characters long'),
  country: z.string().min(3, 'Country must be at least 3 characters long'),
  userName: z.string().min(3, 'Username must be at least 3 characters long'),
});