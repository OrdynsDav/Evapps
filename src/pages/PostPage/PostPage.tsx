import { Header } from "../../UI/Header/Header";
import { Arrow } from "../../UI/Icons/Arrow";
import type { FormButtonProps, FormInputProps } from "../../UI/interfaces";
import { Form } from "../../UI/Form/Form";
import "./PostPage.css";
import { NewPostSchema } from "../schemas";
import { useEffect } from "react";

export default function PostPage() {
    const postInputs: FormInputProps[] = [
        {
            id: 1,
            label: "Заголовок",
            size: "large",
            input: "input",
            type: "text",
            placeholder: "Заголовок",
            name: "title",
        },
        {
            id: 2,
            label: "Страна",
            size: "small",
            input: "input",
            type: "text",
            placeholder: "Страна",
            name: "country",
        },
        {
            id: 3,
            label: "Город",
            size: "small",
            input: "input",
            type: "text",
            placeholder: "Город",
            name: "city",
        },
        {
            id: 4,
            label: "Описание",
            size: "large",
            input: "textarea",
            placeholder: "Добавьте описание вашей истории",
            name: "description",
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

    useEffect(() => {
        document.title = "Evapps \u00A0\u2013\u00A0 Новый пост";
    }, []);

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
                                type="post"
                                schema={NewPostSchema}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
