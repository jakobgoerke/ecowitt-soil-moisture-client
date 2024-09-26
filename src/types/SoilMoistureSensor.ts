import { z } from 'zod';

export const SoilMoistureSensorSchema = z.object({
  channel: z.coerce.number(),
  name: z.string(),
  battery: z.coerce.number(),
  humidity: z.string(),
});
export type SoilMoistureSensor = z.infer<typeof SoilMoistureSensorSchema>;
