import React from "react";
import Form from "../components/form/Form";
import List from "../components/list/List";
import style from "./App.module.scss";
import Stopwatch from "../components/stopwatch/Stopwatch";
import { useState } from "react";
import ITask from "../components/list/ITask";

function App() {
    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [selected, setSelected] = useState<ITask>();

    function selectTask(selectedTask: ITask) {
        setSelected(selectedTask);

        setTasks((tasksOld) =>
            tasksOld.map((task) => ({
                ...task,
                selected: task.id === selectedTask.id ? true : false,
            }))
        );
    }

    function finishTask() {
        if (selected) {
            setSelected(undefined);
            setTasks((tasksOld) =>
                tasksOld.map((task) => {
                    if (task.id === selected.id) {
                        return {
                            ...task,
                            selected: false,
                            complete: true,
                        };
                    }

                    return task;
                })
            );
        }
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List tasks={tasks} selectTask={selectTask} />
            <Stopwatch selected={selected} finishTask={finishTask} />
        </div>
    );
}

export default App;
