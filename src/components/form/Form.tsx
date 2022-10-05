import React from "react";
import Button from "../buttons/Button";

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input type="text" name="task" id="task" placeholder="o que você quer estudar?" required />
                </div>
                <div>
                    <label>Time</label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="1:30:00" required />
                </div>
                <Button />
            </form>
        );
    }
}

export default Form;
