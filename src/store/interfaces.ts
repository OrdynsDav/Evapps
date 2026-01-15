import type { User } from "../models/User";

export interface AuthState {
    isAuth: boolean;
    user: User | null;
    token: string | null;
    auth: (token: string) => void;
    logout: () => void;
    initializeAuth: () => void;
    setUser(user: User): void;
}