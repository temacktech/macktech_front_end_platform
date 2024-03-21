import { z } from "zod";

const customErrorMessages = {
  resetCode: "O código deve ter no mínimo 6 caracteres.",
  password:
    "As senhas devem ter no mínimo 8 caracteres e pelo menos duas das seguintes opções: letras maiúsculas, letras minúsculas, números e símbolos.",
  confirmPassword: "As senhas não coincidem",
};

export const ResettingPasswordSchema = z
  .object({
    resetCode: z
      .string({
        required_error: "Um parâmetro necessário não foi fornecido.",
        invalid_type_error: "O tipo do parâmetro é inválido.",
      })
      .min(6, {
        message: customErrorMessages.resetCode,
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
      })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: customErrorMessages.password,
      })
      .regex(/[A-Z]/, {
        message: customErrorMessages.password,
      })
      .regex(/[a-z]/, {
        message: customErrorMessages.password,
      })
      .regex(/\d/, {
        message: customErrorMessages.password,
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: customErrorMessages.confirmPassword,
    path: ["confirmPassword"],
  });

export type ResettingPasswordData = z.infer<typeof ResettingPasswordSchema>;
