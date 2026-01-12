import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "../store/store";

export function AuthProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        useAuthStore.getState().initializeAuth();
    }, []);
    return <>{children}</>;
}
