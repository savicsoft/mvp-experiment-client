import { profileCarSchema, profileSchema } from '@/schema';
import { z } from 'zod';

export type ProfileSchemaType = z.infer<typeof profileSchema>;
export type ProfileCarSchemaType = z.infer<typeof profileCarSchema>;
