import style from "./Watch.module.scss";

interface Props {
    time: number | undefined;
}

const Watch = ({ time = 0 }: Props) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesInTen, minutesInUnits] = String(minutes).padStart(2, "0");
    const [secondsInTen, secondsInUnits] = String(seconds).padStart(2, "0");

    return (
        <>
            <span className={style.watchNumber}>{minutesInTen}</span>
            <span className={style.watchNumber}>{minutesInUnits}</span>
            <span className={style.watchDivision}>:</span>
            <span className={style.watchNumber}>{secondsInTen}</span>
            <span className={style.watchNumber}>{secondsInUnits}</span>
        </>
    );
};

export default Watch;
