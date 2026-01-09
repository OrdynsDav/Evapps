import type { ButtonProps } from "../interfaces";
import "./Button.css";

export function Button({
    children,
    disabled,
    isPending,
    onClick,
    className = "",
    variant = "fill",
    option = "button",
    href,
}: ButtonProps) {
    return option === "button" ? (
        <button
            className={`btn btn--${variant} ${className}`}
            onClick={onClick}
            disabled={disabled || isPending}
            type="button"
        >
            {isPending ? "Загрузка..." : children}
        </button>
    ) : (
        <a
            className={`btn btn--${variant} ${className}`}
            href={href}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            {children}
        </a>
    );
}
