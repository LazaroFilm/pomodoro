import React, { useReducer } from "react";
import pomodoro from "./pomodoro.png";
import "./App.css";
import Clock from "./Clock";
import Timers from "./Timers";
import reducer from "./reducer";

export default function App() {
  const initialState = {
    started: false,
    sessionTime: 25,
    breakTime: 5,
    clockTime: [25, 0],
    test: "initial",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* LOGO */}
      <h1 id="pomodoro" className="d-flex justify-content-center my-2">
        <img id="pomodoro" src={pomodoro} alt="Pomodoro" />
      </h1>
      {/* TIMERS */}
      <Timers state={state} dispatch={dispatch} />

      {/* CLOCK */}
      <Clock state={state} dispatch={dispatch} />
      <p id="credits">by LazaroFilm - last update Oct 15 6:02 PM</p>
      {/* <p>{state.test}</p>
      <p>
        {state.clockTime[0]}:{state.clockTime[1]}
      </p> */}
    </div>
  );
}
