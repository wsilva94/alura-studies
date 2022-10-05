import React from "react";

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
        <aside>
            <ul>
                {taskList.map((element, index) => (
                    <li key={index}>
                        <h3>{element.task}</h3>
                        <span>{element.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default list;
