import { z } from "zod";

const emailSchema = z
    .email({ message: "Неверный формат email" })
    .min(1, { message: "Email обязателен" });

export const LoginSchema = z.object({
    email: emailSchema,
    password: z
        .string()
        .min(8, { message: "Пароль должен быть не менее 8 символов" }),
});

export const RegisterSchema = z
    .object({
        email: emailSchema,
        password: z
            .string()
            .min(8, { message: "Пароль должен быть не менее 8 символов" }),
        verifyPassword: z.string(),
    })
    .superRefine(({ verifyPassword, password }, ctx) => {
        if (verifyPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "Пароли должны совпадать",
                path: ["verifyPassword"],
            });
        }
    });


export const NewPostSchema = z.object({
    title: z.string(),
    country: z.string(),
    city: z.string(),
    description: z.string()
})