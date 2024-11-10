import { z } from "zod";

export const userPreferencesSchema = z.object({
  userId: z.string().min(1), // Foreign key reference to User

  theme: z.string().default("lara"),

  language: z.string().default("en"),

  notifications: z.object({
    email: z.boolean().default(true),
    push: z.boolean().default(true),
  }),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type BaseIUserPreferences = z.infer<typeof userPreferencesSchema>;

export interface IUserPreferences extends BaseIUserPreferences {
  id: string;
}
