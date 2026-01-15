import type z from "zod";
import type { PostSchema, AuthSchema } from "./schemas";

export type Post = z.infer<typeof PostSchema>
export type Auth = z.infer<typeof AuthSchema>