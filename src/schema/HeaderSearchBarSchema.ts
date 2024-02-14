import { z } from 'zod';

export const HeaderSearchBarSchema = z.object({
  placeFrom: z.string().min(2).max(16),
  placeTo: z.string().min(2).max(16),
  passangers: z.number(),
});
