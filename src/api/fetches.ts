import z from "zod";
import { PostSchema, AuthResponseSchema, UserSchema } from "./schemas";
import type { Post, Auth } from "./types";
import type { User } from "../models/User";

export const BASE_URL = "https://travelblog.skillbox.cc";

async function validateResponse(response: Response): Promise<Response> {
    if (!response.ok) {
        throw new Error(await response.text());
    }

    return response;
}

export async function fetchGetPosts(): Promise<Post[]> {
    return await fetch(`${BASE_URL}/api/posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(validateResponse)
        .then(res => res.json())
        .then(data => z.array(PostSchema).parse(data));
}

export async function fetchAuth(type: 'register' | 'login',{ email, password }: Auth): Promise<string> {
    return await fetch(`${BASE_URL}/api/${type}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(validateResponse)
    .then(res => res.json())
    .then(data => AuthResponseSchema.parse(data).token)
}

export async function fetchUser(token: string | null): Promise<User> {
    return await fetch(`${BASE_URL}/api/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`  
        },
    })
    .then(validateResponse)
    .then(res => res.json())
    .then(data => UserSchema.parse(data))
}

export async function fetchNewPost(token: string | null): Promise<Post> {
    return await fetch(`${BASE_URL}/api/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`     
        },
        credentials: "include",
    })
    .then(validateResponse)
    .then(res => res.json())
}