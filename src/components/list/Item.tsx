import ITask from "./ITask";
import style from "./Item.module.scss";

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void;
}

const item = ({ id, task, time, selected, complete, selectTask }: Props) => {
    return (
        <li
            className={`${style.item} ${selected ? style.selectedItem : ""} ${complete ? style.completedItem : ""}`}
            onClick={() =>
                !complete &&
                selectTask({
                    id,
                    task,
                    time,
                    selected,
                    complete,
                })
            }
        >
            <h3>{task}</h3>
            <span>{time}</span>
            {complete && <span className={style.concluded} area-label="Tarefa Completada"></span>}
        </li>
    );
};

export default item;
