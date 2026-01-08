import "./Header.css";
import { Logo } from "../Icons/Logo"

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__panel">
                    <div className="header__logo">
                        <Logo />
                        <span className="header__logo-text">Travel</span>
                    </div>
                    <button className="header__btn" type="button">Войти</button>
                </div>
                <h1 className="header__title">Там, где мир начинается с&nbsp; путешествий</h1>
            </div>
        </header>
    )
}