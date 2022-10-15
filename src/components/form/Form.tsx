import React from "react";
import Button from "../buttons/Button";
import ITask from "../list/ITask";
import StyleForm from "./Form.module.scss";
import { v4 as uuidV4 } from "uuid";

class Form extends React.Component<{ setTasks: React.Dispatch<React.SetStateAction<ITask[]>> }> {
    state = {
        task: "",
        time: "",
    };

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        this.props.setTasks((tasksOld) => [...tasksOld, { ...this.state, selected: false, complete: false, id: uuidV4() }]);

        this.clearForm();
    }

    clearForm() {
        this.setState({
            task: "",
            time: "",
        });
    }

    render() {
        return (
            <form className={StyleForm.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={StyleForm.inputContainer}>
                    <label htmlFor="task">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={this.state.task}
                        onChange={(event) => this.setState({ ...this.state, task: event.target.value })}
                        placeholder="o que você quer estudar?"
                        required
                    />
                </div>
                <div className={StyleForm.inputContainer}>
                    <label>Time</label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        value={this.state.time}
                        onChange={(event) => this.setState({ ...this.state, time: event.target.value })}
                        min="00:00:00"
                        max="1:30:00"
                        required
                    />
                </div>
                <Button text="Add" type="submit" />
            </form>
        );
    }
}

export default Form;
