import Button from "../buttons/Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import ClassTime from "../../common/utils/Time";
import ITask from "../list/ITask";
import { useEffect, useState } from "react";

interface Props {
    selected: ITask | undefined;
    finishTask: () => void;
}

const Stopwatch = ({ selected, finishTask }: Props) => {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (typeof selected?.time !== "undefined") {
            const classTime = new ClassTime();
            setTime(classTime.convertTimeToSeconds(selected.time));
        }
    }, [selected]);

    function countdown(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);

                return countdown(counter - 1);
            }

            finishTask();
        }, 1000);
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.watchWrapper}>
                <Watch time={time} />
            </div>
            <Button text="Start" onClick={() => countdown(time)}></Button>
        </div>
    );
};

export default Stopwatch;
