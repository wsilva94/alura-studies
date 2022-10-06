import React from "react";
import Button from "../buttons/Button";
import StyleForm from "./Form.module.scss";

class Form extends React.Component {
    render() {
        return (
            <form className={StyleForm.newTask}>
                <div className={StyleForm.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input type="text" name="task" id="task" placeholder="o que você quer estudar?" required />
                </div>
                <div className={StyleForm.inputContainer}>
                    <label>Time</label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="1:30:00" required />
                </div>
                <Button />
            </form>
        );
    }
}

export default Form;
