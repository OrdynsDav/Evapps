import { Header } from "../../UI/Header/Header";
import type { FormButtonProps, FormInputProps } from "../../UI/interfaces";
import { Form } from "../../UI/Form/Form";
import "./RegisterPage.css";
import { useEffect, useMemo } from "react";
import { RegisterSchema } from "../schemas";

export default function RegisterPage() {
    const registerInputs: FormInputProps[] = useMemo(
        () => [
            {
                id: 1,
                label: "Email",
                size: "large",
                input: "input",
                type: "email",
                placeholder: "Email",
                name: "email",
            },
            {
                id: 2,
                label: "Пароль",
                size: "small",
                input: "input",
                type: "password",
                placeholder: "Пароль",
                name: "password",
            },
            {
                id: 3,
                label: "Повторите пароль",
                size: "small",
                input: "input",
                type: "password",
                placeholder: "Повторите пароль",
                name: "verifyPassword",
            },
        ],
        []
    );
    const registerButtons: FormButtonProps[] = useMemo(
        () => [
            {
                id: 1,
                className: "form__submit",
                content: {
                    text: "Зарегистрироваться",
                },
                type: "submit",
            },
        ],
        []
    );

    useEffect(() => {
        document.title = "Evapps \u00A0\u2013\u00A0 Регистрация";
    }, []);
    return (
        <>
            <Header title="Истории ваших путешествий" />
            <main>
                <section className="register">
                    <div className="container">
                        <div className="register__wrapper">
                            <Form
                                inputs={registerInputs}
                                buttons={registerButtons}
                                schema={RegisterSchema}
                                title="Регистрация"
                                type="register"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
