import style from "./List.module.scss";
import Item from "./Item";

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
        <aside className={style.listTasks}>
            <h2> Estudo do Dia</h2>
            <ul>
                {taskList.map((element, index) => (
                    <Item {...element} key={index}></Item>
                ))}
            </ul>
        </aside>
    );
};

export default list;
