import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "./interfaces";
import { fetchUser } from "../api/fetches";

const sessionStorageStore = {
    getItem: (name: string) => {
        const str = sessionStorage.getItem(name);
        return str ? JSON.parse(str) : null;
    },
    setItem: (name: string, value: any) => {
        sessionStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name: string) => {
        sessionStorage.removeItem(name);
    },
};

export const useAuthStore = create<AuthState>()(
    persist<AuthState>(
        (set, get) => ({
            isAuth: false,
            user: null,
            token: String(cookieStore.get("XSRF-TOKEN")),

            setUser(user) {
                set({ user });
            },

            logout() {
                set({ isAuth: false, user: null, token: null });
                sessionStorage.removeItem("auth-storage");
            },

            auth(token) {
                set({ isAuth: true, token });
            },

            initializeAuth() {
                const token = get().token;
                if (!token) {
                    set({ isAuth: false });
                    return;
                }
                fetchUser(token)
                    .then(user => {
                        if (user) {
                            set({ isAuth: true, user });
                        } else {
                            set({ isAuth: false, user: null });
                        }
                    })
                    .catch(() => {
                        set({ isAuth: false, user: null });
                    });
            },
        }),
        {
            name: "auth-storage",
            storage: sessionStorageStore, 
        }
    )
);
