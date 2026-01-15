import { Button } from "../../Button/Button";
import type { FormButtonProps } from "../../interfaces";

export function FormActions({ 
    buttons, 
    isSubmitting = false 
}: { 
    buttons: FormButtonProps[]; 
    isSubmitting?: boolean; 
}) {
    return (
        <fieldset className="form__actions">
            {buttons.map(({ id, className, content, option, variant, href, type }) => (
                <Button
                    key={id}
                    className={className}
                    option={option}
                    href={href}
                    variant={variant}
                    type={type}
                    disabled={isSubmitting && type === "submit"}
                    isPending={isSubmitting && type === "submit"}
                >
                    {content.icon ? (
                        <>
                            {content.icon}
                            <span className={`${className}-text`}>
                                {isSubmitting && type === "submit" ? "Загрузка..." : content.text}
                            </span>
                        </>
                    ) : (
                        isSubmitting && type === "submit" ? "Загрузка..." : content.text
                    )}
                </Button>
            ))}
        </fieldset>
    );
}
