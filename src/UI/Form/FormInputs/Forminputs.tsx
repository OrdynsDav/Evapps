import type { FormInputProps } from "../../interfaces";
import { useFormContext } from "react-hook-form";

export function FormInputs({
    inputs,
    errors,
}: {
    inputs: FormInputProps[];
    errors: Record<string, any> | null;
}) {
    const { register } = useFormContext();

    return (
        <fieldset className="form__inputs">
            {inputs.map(
                ({ id, label, size, input, placeholder, type, name }) => {
                    const error = errors != null ? errors[name] : null;
                    const hasError = !!error?.message;
                    const field = register(name);

                    return (
                        <div
                            key={id}
                            className={`form__input form__input--${size} ${
                                hasError ? "form__input--error" : ""
                            }`}
                        >
                            <label className="form__label" htmlFor={name}>
                                <span className="form__star">*</span>
                                <span className="form__label-text">
                                    {label}
                                </span>
                            </label>
                            {input === "input" ? (
                                <input
                                    id={name}
                                    type={type}
                                    placeholder={placeholder}
                                    className="form__field"
                                    autoComplete={name}
                                    {...field}
                                />
                            ) : (
                                <textarea
                                    id={name}
                                    placeholder={placeholder}
                                    className="form__field form-textarea"
                                    {...field}
                                />
                            )}
                            {hasError && (
                                <span className="form__error">
                                    {error.message}
                                </span>
                            )}
                        </div>
                    );
                }
            )}
        </fieldset>
    );
}
