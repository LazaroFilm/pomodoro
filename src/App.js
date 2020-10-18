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
    runningType: "Work Hard!",
    sessionTime: 25,
    breakTime: 5,
    clockTime: [25, 0],
    test: "initial",
    intervalID: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [intervalID, setInterID] = useState();

  const [playRing] = useSound(PomodoroRing);
  const [playTicking] = useSound(PomodoroTicking, { volume: 0.2 });

  //* Counting down
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

  //* When timer runs out
  useEffect(() => {
    if (state.clockTime[0] <= 0 && state.clockTime[1] === 0) {
      console.log(`DING DING DING!`);
      playRing();
      dispatch({ type: "timer-end" });
    }
  }, [state.clockTime]);

  useEffect(() => {
    console.log(state.runningType);
    document.getElementById("timer-label").innerHTML = state.runningType;
    if (state.runningType === "Work Hard!") {
      document
        .getElementById("timer-label")
        .setAttribute("className", "lead alert badge-primary display-4");
    }
  }, [state.runningType]);

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
