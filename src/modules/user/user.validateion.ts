import { z } from "zod";

const userSchemaValidation = z.object({
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "password must be a string",
    })
    .max(20, { message: "password can't be more then 20" })
    .optional(),
});

export default userSchemaValidation;