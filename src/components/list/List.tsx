import React from "react";
import ListStyle from "./List.module.scss";

const list = () => {
    const taskList = [
        {
            task: "React",
            time: "02:00:00",
        },
        {
            task: "Java Script",
            time: "01:00:00",
        },
    ];

    return (
        <aside className={ListStyle.listTasks}>
            <ul>
                {taskList.map((element, index) => (
                    <li className={ListStyle.item} key={index}>
                        <h3>{element.task}</h3>
                        <span>{element.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default list;
