import { Button } from "../Button/Button";
import { Upload } from "../Icons/Upload";
import type { FormProps } from "../interfaces";
import "./Form.css";

export function Form({ inputs, buttons, title, upload }: FormProps) {
    return (
        <form className="form">
            <h2 className="form__title">{title}</h2>
            {upload && (
                <button className="form__btn" type="button">
                    <Upload />
                    <span className="form__btn-text">Загрузите ваше фото</span>
                </button>
            )}
            <fieldset className="form__inputs">
                {inputs.map(({ id, label, size, input, placeholder, type }) => (
                    <div
                        key={id}
                        className={`form__input form__input--${size}`}
                    >
                        <label className="form__label">
                            <span className="form__star">*</span>
                            <span className="form__label-text">{label}</span>
                        </label>
                        {input === "input" ? (
                            <input
                                className="form__field"
                                type={type}
                                required
                                placeholder={placeholder}
                            />
                        ) : (
                            <textarea
                                className="form__field form-textarea"
                                required
                                placeholder={placeholder}
                            ></textarea>
                        )}
                    </div>
                ))}
            </fieldset>
            <fieldset className="form__actions">
                {buttons.map(
                    ({ id, className, content, option, variant, href }) => (
                        <Button
                            key={id}
                            className={className}
                            option={option}
                            href={href}
                            variant={variant}
                        >
                            {content.icon ? (
                                <>
                                    {content.icon}
                                    <span className={`${className}-text`}>
                                        {content.text}
                                    </span>
                                </>
                            ) : (
                                content.text
                            )}
                        </Button>
                    )
                )}
            </fieldset>
        </form>
    );
}
