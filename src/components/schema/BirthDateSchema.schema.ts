import { z } from "zod";

export const BirthDateSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export type BirthDate = z.infer<typeof BirthDateSchema>;
