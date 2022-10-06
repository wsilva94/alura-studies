import React from "react";
import StyleButton from "./Button.module.scss";

class Button extends React.Component {
    render(): React.ReactNode {
        return <button className={StyleButton.button}>Click</button>;
    }
}

export default Button;
