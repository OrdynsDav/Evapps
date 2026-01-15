import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAuth, fetchGetPosts, fetchUser } from "./fetches";
import type { Auth } from "./types";
import { useAuthStore } from "../store/store";

export const useGetPosts = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchGetPosts(),
    });
};

export const useAuth = (type: "register" | "login", setServerError: (error: { field: string; message: string; global?: boolean }) => void) => {
    const { mutate: mutateUser } = useUser();

    return useMutation({
        mutationFn: ({ email, password }: Auth) =>
            fetchAuth(type, { email, password }),

        onSuccess: (token) => {
            useAuthStore.getState().auth(token);
            mutateUser(token);
        },

        onError: (error) => {
            const message = error instanceof Error ? error.message : "";

            if (message.includes("already been taken")) {
                setServerError({
                    field: "email",
                    message: "Аккаунт с данным email уже существует",
                });
            } else {
                setServerError({
                    field: "email",
                    message: "Ошибка регистрации. Проверьте данные и попробуйте снова.",
                });
            }

            if (message.includes("Bad credentials")) {
                setServerError({
                    field: "",
                    message: "Неправильный логин или пароль",
                    global: true,
                })
            }
        },
    });
};


export const useUser = () => {
    return useMutation({
        mutationFn: (token: string) => fetchUser(token),
        onSuccess: user => {
            if (user) {
                useAuthStore.getState().setUser(user);
            }
        },
        onError: err => {
            if (err instanceof Error) {
                console.log(err.message);
            }
        },
    });
};
