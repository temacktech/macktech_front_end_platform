import { z } from "zod";

const customErrorMessages = {
  drt: "Verifique o DRT e tente novamente",
  password: "Verifique a senha e tente novamente",
};

export const LoginSchema = z.object({
  drt: z
    .string({
      required_error: "Um parâmetro necessário não foi fornecido.",
      invalid_type_error: "O tipo do parâmetro é inválido.",
    })
    .min(5, {
      message: customErrorMessages.drt,
    })
    .max(15, {
      message: customErrorMessages.drt,
    }),
  password: z
    .string({
      required_error: "Um parâmetro necessário não foi fornecido.",
      invalid_type_error: "O tipo do parâmetro é inválido.",
    })
    .min(8, {
      message: customErrorMessages.password,
    })
    .max(40, {
      message: customErrorMessages.password,
    }),
});

export type LoginData = z.infer<typeof LoginSchema>;
