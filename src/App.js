import React, { useState, useReducer, useEffect } from "react";
import pomodoro from "./pomodoro.png";
import "./App.css";
import Clock from "./Clock";
import Timers from "./Timers";
import reducer from "./reducer";

export default function App() {
  const initialState = {
    isRunning: "initial",
    sessionTime: 25,
    breakTime: 5,
    clockTime: [25, 0],
    test: "initial",
    intervalID: "testing",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [intervalID, setInterID] = useState();

  useEffect(() => {
    console.log(`isRunning changed to: ${state.isRunning}`);
    console.log(`initial interval is: ${intervalID}`);
    if (state.isRunning === "start") {
      let letintervalID = setInterval(() => {
        console.log(`interval is: ${intervalID}`);
        console.log(`tic toc`);
        dispatch({ type: "tic-toc" });
      }, 1000);
      setInterID(letintervalID);
    } else if (state.isRunning === "stop") {
      console.log("clearInterval stop!");
      clearInterval(intervalID);
    }
  }, [state.isRunning]);

  return (
    <div className="App">
      <h1 id="pomodoro" className="d-flex justify-content-center my-2">
        <img id="pomodoro" src={pomodoro} alt="Pomodoro" />
      </h1>
      <Timers state={state} dispatch={dispatch} />
      <Clock state={state} dispatch={dispatch} />
      <p id="credits">by LazaroFilm - last update Oct 16 4:43 PM</p>
      <p>hello</p>
      <p>{state.test}</p>
      {/* <p>{Start(state)}</p> */}
    </div>
  );
}
