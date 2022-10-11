import Button from "../buttons/Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";

const Stopwatch = () => {
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.watchWrapper}>
                <Watch />
            </div>
            <Button text="Start"></Button>
        </div>
    );
};

export default Stopwatch;
