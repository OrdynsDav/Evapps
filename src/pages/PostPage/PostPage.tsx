import { Header } from "../../UI/Header/Header";
import { Arrow } from "../../UI/Icons/Arrow";
import type { FormButtonProps, FormInputProps } from "../../UI/interfaces";
import { Form } from "../../UI/Form/Form";
import "./PostPage.css";

export default function PostPage() {
    const postInputs: FormInputProps[] = [
        {
            id: 1,
            label: "Заголовок",
            size: "large",
            input: "input",
            type: "text",
            placeholder: "Заголовок",
        },
        {
            id: 2,
            label: "Страна",
            size: "small",
            input: "input",
            type: "text",
            placeholder: "Страна",
        },
        {
            id: 3,
            label: "Город",
            size: "small",
            input: "input",
            type: "text",
            placeholder: "Город",
        },
        {
            id: 4,
            label: "Описание",
            size: "large",
            input: "textarea",
            placeholder: "Добавьте описание вашей истории",
        },
    ];

    const postButtons: FormButtonProps[] = [
        {
            id: 1,
            className: "form__back",
            option: "link",
            href: "/",
            variant: "transparent",
            content: {
                icon: <Arrow />,
                text: "Назад",
            },
        },
        {
            id: 2,
            className: "form__submit",
            content: {
                text: "Сохранить",
            },
            option: "button",
            variant: "fill",
        },
    ];

    return (
        <>
            <Header title="Истории ваших путешествий" />
            <main>
                <div className="new-post">
                    <div className="container">
                        <div className="new-post__wrapper">
                            <Form
                                inputs={postInputs}
                                buttons={postButtons}
                                title="Добавление истории о&nbsp;путешествии"
                                upload
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
