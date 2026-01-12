export interface IUser {
    id: number;
    full_name: string;
    city: string;
    country: string;
    bio: string;
}

export interface AuthState {
    isAuth: boolean;
    user: IUser | null;
    login: (user: IUser) => void;
    logout: () => void;
    register: (user: IUser) => void;
    initializeAuth: () => void;
}