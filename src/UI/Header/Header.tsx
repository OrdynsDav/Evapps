import "./Header.css";
import { Logo } from "../Icons/Logo";

export function Header({
    title,
    variant = "normal",
}: {
    title: string;
    variant?: "normal" | "tall";
}) {
    return (
        <header className={`header header--${variant}`}>
            <div className="container">
                <div className="header__panel">
                    <a className="header__logo" href="/">
                        <Logo />
                        <span className="header__logo-text">Travel</span>
                    </a>
                    <a className="header__btn" href="/login">
                        Войти
                    </a>
                </div>
                <h1 className="header__title">{title}</h1>
            </div>
        </header>
    );
}
