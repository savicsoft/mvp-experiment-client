import { profileSchema } from '@/schema';
import { z } from 'zod';

export type ProfileSchemaType = z.infer<typeof profileSchema>;
