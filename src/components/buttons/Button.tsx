import React from "react";

class Button extends React.Component {
    render(): React.ReactNode {
        const backgroundColor = "blue";

        return (
            <button
                style={{
                    backgroundColor,
                }}
            >
                Click
            </button>
        );
    }
}

export default Button;
