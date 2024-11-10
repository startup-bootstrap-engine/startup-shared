import { z } from "zod";

export const logSchema = z.object({
  action: z.string().min(1, "Action is required"),
  emitter: z.string().min(1, "Emitter is required"),
  target: z.string().min(1, "Target is required"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type BaseILog = z.infer<typeof logSchema>;

export interface ILog extends BaseILog {
  id: string;
}
