import { Button } from "../../Button/Button";
import type { FormButtonProps } from "../../interfaces";

export function FormActions({ buttons }: { buttons: FormButtonProps[] }) {
    return (
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
    );
}
