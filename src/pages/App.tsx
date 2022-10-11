import React from "react";
import Form from "../components/form/Form";
import List from "../components/list/List";
import style from "./App.module.scss";
import Stopwatch from "../components/stopwatch/Stopwatch";

function App() {
    return (
        <div className={style.AppStyle}>
            <Form />
            <List />
            <Stopwatch />
        </div>
    );
}

export default App;
