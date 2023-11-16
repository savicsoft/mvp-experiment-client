import { ZodSchema, z } from 'zod';
import { MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from '@/config';
import { signUpType } from './type';

//Currently setup schema for signup

export const signUpSchema: ZodSchema<signUpType> = z.object({
  firstName: z
    .string()
    .min(3)
    .max(15)
    .regex(/^[/^[A-Za-zÀ-ÖØ-öø-ÿ -']+$/i),
  lastName: z
    .string()
    .min(3)
    .max(15)
    .regex(/^[/^[A-Za-zÀ-ÖØ-öø-ÿ -']+$/i),
  email: z
    .string()
    .email()
    .regex(/^\S+@\S+\.\S+$/),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*"'])(?=.*\d).+$/),
  validatePassword: z.string(),
});

//Possible use of schema in the future

export const registrationSchema = () => {
  z.object({
    name: z
      .string()
      .min(3)
      .max(15)
      .regex(/^[a-z]+$/),
    surname: z
      .string()
      .min(3)
      .max(15)
      .regex(/^[a-z]+$/),
    email: z
      .string()
      .email()
      .min(8)
      .max(15)
      .regex(/[a-z0-9]+@[a-z]+.[a-z]{2,3}/),
    profileImage: z
      .any()
      .refine((files) => files?.length === 1, 'Image is required.')
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        `Max file size is 5MB.`,
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        '.jpg, .jpeg and .png files are accepted.',
      ),
    password: z
      .string()
      .min(8)
      .max(15)
      .regex(/^[a-z0-9]+$/),
    passwordRepeat: z.string(),
    dateOfBirth: z.date(),
    city: z.string(),
    country: z.string(),
  }).refine((data) => data.password === data.passwordRepeat, {
    message: '',
    path: ['passwordReaper'],
  });
};

export const loginSchema = () => {
  z.object({
    username: z.string().min(3),
    password: z
      .string()
      .min(8)
      .max(15)
      .regex(/^[a-z0-9]+$/),
    remember: z.boolean().optional(),
  });
};
