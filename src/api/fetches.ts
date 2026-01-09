import z from "zod";
import { PostSchema } from "./schemas";
import type { Post } from "./types";

export const BASE_URL = "https://travelblog.skillbox.cc";

async function validateResponse(response: Response): Promise<Response> {
    if (!response.ok) {
        throw new Error(await response.text());
    }

    return response
}

export async function fetchGetPosts(): Promise<Post[]> {
    return await fetch(`${BASE_URL}/api/posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(validateResponse)
    .then(res => res.json())
    .then(data => z.array(PostSchema).parse(data))
}