import z from "zod";

export const PostSchema = z.object({
    id: z.number(),
    title: z.string(),
    excerpt: z.string(),
    photo: z.string()
});

export const AuthSchema = z.object({
    email: z.email("Неверный email"), 
    password: z.string().min(8, "Пароль должен быть не менее 8 символов")
});

export const AuthResponseSchema = z.object({
    token: z.string(),
});

export const UserSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    city: z.string(),
    country: z.string(),
    bio: z.string(),
})