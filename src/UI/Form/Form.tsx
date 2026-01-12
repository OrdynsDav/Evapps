import { Upload } from "../Icons/Upload";
import type { FormProps } from "../interfaces";
import "./Form.css";
import { FormActions } from "./FormActions/FormActins";
import { FormInputs } from "./FormInputs/Forminputs";

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
            <FormInputs inputs={inputs}/>
            <FormActions buttons={buttons}/>
        </form>
    );
}
