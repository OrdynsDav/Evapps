import type { ZodObject, ZodRawShape } from "zod";

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    isPending?: boolean;
    variant?: "fill" | "transparent";
    option?: "button" | "link";
    href?: string;
    type?: "button" | "submit" | "reset"
}

export interface FormButtonProps {
    id: number;
    className?: string;
    option?: "link" | "button";
    href?: string;
    variant?: "fill" | "transparent";
    content: {
        icon?: React.ReactNode;
        text?: string;
    };
    disabled?: boolean;
    type?: "button" | "submit" | "reset"
}

export interface FormInputProps {
    id: number;
    label: string;
    size: "small" | "large";
    input: "input" | "textarea";
    placeholder: string;
    type?: string;
    name: string;
}

export type FormProps = {
    inputs: FormInputProps[];
    buttons: FormButtonProps[];
    title: string;
    upload?: boolean;
    schema: ZodObject<ZodRawShape>;
    type: 'post' | 'register' | 'login';
};
