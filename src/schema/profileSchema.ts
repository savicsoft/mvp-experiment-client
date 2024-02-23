import { z } from 'zod';

export const profileSchema = z.object({
  firstname: z
    .string()
    .min(3)
    .max(15)
    .regex(/^[/^[A-Za-zÀ-ÖØ-öø-ÿ -']+$/i, 'Letters only')
    .optional()
    .transform((e) => (e === '' ? undefined : e)),
  lastname: z
    .string()
    .min(3)
    .max(15)
    .regex(/^[/^[A-Za-zÀ-ÖØ-öø-ÿ -']+$/i, 'Letters only')
    .optional(),
  country: z.string().optional(),
  phone_number: z
    .string()
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      'Digits only',
    )
    .refine((data) => data.length === 11, 'Should be 11 digits')
    .optional(),
  birth_date: z.any().optional(),
  gender: z.string().optional(),
});

export const profileCarSchema = z.object({
  registration_number: z
    .string()
    .optional()
    .transform((e) => (e === '' ? undefined : e)),
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.any().optional(),
  body_style: z.any().optional(),
  gas_type: z.string().optional(),
  fuel_efficiency: z.string().optional(),
  color: z.string().optional(),
  photos: z.array(z.string()).optional(),
});
