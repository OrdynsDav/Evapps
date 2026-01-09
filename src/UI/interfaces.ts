export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    isPending?: boolean;
    variant?: "fill" | "transparent";
    option?: "button" | "link";
    href?: string;
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
}

export interface FormInputProps {
    id: number;
    label: string;
    size: "small" | "large";
    input: "input" | "textarea";
    placeholder: string;
    type?: string;
}

export interface FormProps {
    buttons: FormButtonProps[];
    inputs: FormInputProps[];
    title: string;
    upload?: boolean;
}
