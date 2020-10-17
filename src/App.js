import React, { useState, useReducer, useEffect } from "react";
import pomodoro from "./pomodoro.png";
import "./App.css";
import Clock from "./Clock";
import Timers from "./Timers";
import reducer from "./reducer";
import useSound from "use-sound";
import PomodoroRing from "./sounds/PomodoroRing.m4a";
import PomodoroTicking from "./sounds/PomodoroTicking.m4a";

export default function App() {
  const initialState = {
    isRunning: "stop",
    sessionTime: 25,
    breakTime: 5,
    clockTime: [25, 0],
    test: "initial",
    intervalID: "testing",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [intervalID, setInterID] = useState();

  const [playRing] = useSound(PomodoroRing);
  const [playTicking] = useSound(PomodoroTicking, { volume: 0.2 });

  useEffect(() => {
    if (state.isRunning === "start") {
      playTicking();
      let letintervalID = setInterval(() => {
        dispatch({ type: "tic-toc" });
      }, 1000);
      setInterID(letintervalID);
    } else if (state.isRunning === "stop") {
      clearInterval(intervalID);
    }
  }, [state.isRunning]);

  useEffect(() => {
    if (state.clockTime[0] <= 0 && state.clockTime[1] === 0) {
      console.log(`DING DING DING!`);
      clearInterval(intervalID);
      playRing();
    }
  }, [state.clockTime]);

  return (
    <div className="App">
      <h1 id="pomodoro" className="d-flex justify-content-center my-2">
        <img id="pomodoro" src={pomodoro} alt="Pomodoro" />
      </h1>
      <Timers state={state} dispatch={dispatch} />
      <Clock state={state} dispatch={dispatch} />
      <p id="credits">by LazaroFilm - last update Oct 17 4:35 PM</p>
    </div>
  );
}
