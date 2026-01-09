import type z from "zod";
import type { PostSchema } from "./schemas";

export type Post = z.infer<typeof PostSchema>