import { z } from "zod";

export const abTestSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  enabled: z.boolean().default(true),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type BaseIABTest = z.infer<typeof abTestSchema>;

export interface IABTest extends BaseIABTest {
  id: string;
}
