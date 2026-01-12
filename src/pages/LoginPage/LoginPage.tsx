import { Header } from "../../UI/Header/Header";
import type { FormButtonProps, FormInputProps } from "../../UI/interfaces";
import { Form } from "../../UI/Form/Form";
import "./LoginPage.css";
import { useEffect } from "react";

export default function LoginPage() {
    const registerInputs: FormInputProps[] = [
        {
            id: 1,
            label: "Логин",
            size: "large",
            input: "input",
            type: "text",
            placeholder: "Email",
        },
        {
            id: 2,
            label: "Пароль",
            size: "large",
            input: "input",
            type: "password",
            placeholder: "Пароль",
        },
    ];

    const registerButtons: FormButtonProps[] = [
        {
            id: 1,
            className: "form__register",
            option: "link",
            href: "/register",
            variant: "transparent",
            content: {
                text: "Зарегистрироваться",
            },
        },
        {
            id: 2,
            className: "form__submit",
            content: {
                text: "Войти",
            },
        },
    ];
    useEffect(() => {
        document.title = "Evapps \u00A0\u2013\u00A0 Вход";
    }, []);
    return (
        <>
            <Header title="Истории ваших путешествий" />
            <main>
                <section className="login">
                    <div className="container">
                        <div className="login__wrapper">
                            <Form
                                inputs={registerInputs}
                                buttons={registerButtons}
                                title="Вход в профиль"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
