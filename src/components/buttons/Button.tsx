import React from "react";
import StyleButton from "./Button.module.scss";

interface Props {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

const Button = ({ text, type, onClick }: Props) => {
    if (typeof type === "undefined") {
        type = "button";
    }

    return (
        <button onClick={onClick} type={type} className={StyleButton.button}>
            {text}
        </button>
    );
};

export default Button;
