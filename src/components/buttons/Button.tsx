import React from "react";
import StyleButton from "./Button.module.scss";

class Button extends React.Component<{ text: string }> {
    render(): React.ReactNode {
        return <button className={StyleButton.button}>{this.props.text}</button>;
    }
}

export default Button;
