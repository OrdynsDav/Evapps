import type { ButtonProps } from "../interfaces";
import "./Button.css";

export function Button({
    children,
    onClick,
    disabled,
    className = "",
    isPending,
    variant = "fill",
    option = "button",
    href,
    type = "button",
}: ButtonProps) {
    if (option === "link" && href) {
        return (
            <a href={href} className={`btn btn--${variant} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={`btn btn--${variant} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled || isPending}
        >
            {children}
        </button>
    );
}
