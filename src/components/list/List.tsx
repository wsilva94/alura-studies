import style from "./List.module.scss";
import Item from "./Item";
import ITask from "./ITask";

interface Props {
    tasks: ITask[];
    selectTask: (selectedTask: ITask) => void;
}

const list = ({ tasks, selectTask }: Props) => {
    return (
        <aside className={style.listTasks}>
            <h2> Estudo do Dia</h2>
            <ul>
                {tasks.map((item) => (
                    <Item {...item} key={item.id} selectTask={selectTask}></Item>
                ))}
            </ul>
        </aside>
    );
};

export default list;
