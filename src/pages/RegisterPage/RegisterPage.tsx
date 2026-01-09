import { Header } from "../../UI/Header/Header";
import type { FormButtonProps, FormInputProps } from "../../UI/interfaces";
import { Form } from "../../UI/Form/Form";
import "./RegisterPage.css"

export default function RegisterPage() {
    const registerInputs: FormInputProps[] = [
        {
            id: 1,
            label: "Email",
            size: "large",
            input: "input",
            type: "email",
            placeholder: "Email"
        },
        {
            id: 2,
            label: "Пароль",
            size: "small",
            input: "input",
            type: "password",
            placeholder: "Пароль"
        },
        {
            id: 3,
            label: "Повторите пароль",
            size: "small",
            input: "input",
            type: "password",
            placeholder: "Повторите пароль"
        },
    ]
    const registerButtons: FormButtonProps[] = [
        {
            id: 1,
            className: "form__submit",
            content: {
                text: "Зарегистрироваться",
            }
        }
    ]
    return (
        <>
            <Header title="Истории ваших путешествий"/>
            <main>
                <section className="register">
                    <div className="container">
                        <div className="register__wrapper">
                            <Form
                                inputs={registerInputs}
                                buttons={registerButtons}
                                title="Регистрация"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}