import type { FormInputProps } from "../../interfaces";

export function FormInputs({ inputs }: { inputs: FormInputProps[] }) {
    return (
        <fieldset className="form__inputs">
            {inputs.map(({ id, label, size, input, placeholder, type }) => (
                <div key={id} className={`form__input form__input--${size}`}>
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
    );
}
