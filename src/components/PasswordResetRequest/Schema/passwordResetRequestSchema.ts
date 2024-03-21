import { z } from "zod";

const drtErrorMessages = "Verifique o DRT e tente novamente";

export const PasswordResetRequestSchema = z.object({
  drt: z
    .string({
      required_error: "Um parâmetro necessário não foi fornecido.",
      invalid_type_error: "O tipo do parâmetro é inválido.",
    })
    .min(5, {
      message: drtErrorMessages,
    })
    .max(15, {
      message: drtErrorMessages,
    }),
});

export type PasswordResetRequestData = z.infer<
  typeof PasswordResetRequestSchema
>;
