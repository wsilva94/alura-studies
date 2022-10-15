class Time {
    public convertTimeToSeconds(time: string): number {
        const [hours = "0", minutes = "0", second = "0"] = time.split(":");

        const hoursInMinutes = Number(hours) * 3600;

        const minutesInSecond = Number(minutes) * 60;

        return hoursInMinutes + minutesInSecond + Number(second);
    }
}

export default Time;
