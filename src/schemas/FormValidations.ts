import { z } from "zod";
export const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name must contain only letters"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name must contain only letters"),

  email: z.email("Please enter a valid email address"),

  telephone: z
    .string()
    .min(1, "Telephone is required")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid telephone number")
    .min(10, "Telephone number must be at least 10 digits"),

  message: z
    .string()
    .max(500, "Message must be less than 500 characters")
    .optional(),

  tos: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms & Conditions",
  }),
});
