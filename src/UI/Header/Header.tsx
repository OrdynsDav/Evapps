import "./Header.css";
import { Logo } from "../Icons/Logo";
import { useAuthStore } from "../../store/store";
import { uuidv7 } from "zod";

export function Header({
    title,
    variant = "normal",
}: {
    title: string;
    variant?: "normal" | "tall";
}) {
    const { user, isAuth } = useAuthStore();
    return (
        <header className={`header header--${variant}`}>
            <div className="container">
                <div className="header__panel">
                    <a className="header__logo" href="/">
                        <Logo />
                        <span className="header__logo-text">Travel</span>
                    </a>
                    {isAuth ? (
                        <button className="header__btn" type="button">
                            {user?.full_name !== "" ? user?.full_name : `user-${Math.random()}`}
                        </button>
                    ) : (
                        <a className="header__btn" href="/login">
                            Войти
                        </a>
                    )}
                </div>
                <h1 className="header__title">{title}</h1>
            </div>
        </header>
    );
}
