import { create } from "zustand";
import type { AuthState } from "./interfaces";

export const useAuthStore = create<AuthState>()((set) => ({
    isAuth: false,
    user: null,

    login(user) {
        set({
            isAuth: true,
            user,
        });
    },
    logout() {
        set({
            isAuth: false,
            user: null,
        });
    },
    register(user) {
        set({
            isAuth: true,
            user,
        });
    },
    initializeAuth() {
        set({
            isAuth: false,
            user: null,
        })
    },
}))