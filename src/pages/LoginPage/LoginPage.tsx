import { Header } from "../../UI/Header/Header";
import type { FormButtonProps, FormInputProps } from "../../UI/interfaces";
import { Form } from "../../UI/Form/Form";
import "./LoginPage.css";
import { useEffect } from "react";
import { LoginSchema } from "../schemas";

export default function LoginPage() {
    const loginrInputs: FormInputProps[] = [
        {
            id: 1,
            label: "Логин",
            size: "large",
            input: "input",
            type: "text",
            placeholder: "Email",
            name: "email",
        },
        {
            id: 2,
            label: "Пароль",
            size: "large",
            input: "input",
            type: "password",
            placeholder: "Пароль",
            name: "password",
        },
    ];

    const loginButtons: FormButtonProps[] = [
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
            type: "submit",
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
                                inputs={loginrInputs}
                                buttons={loginButtons}
                                schema={LoginSchema}
                                title="Вход в профиль"
                                type="login"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
