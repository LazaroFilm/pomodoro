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

  const Start = (state) => {
    return state.started ? "STARTED" : "Stopped";
  };

  return (
    <div className="App">
      <h1 id="pomodoro" className="d-flex justify-content-center my-2">
        <img id="pomodoro" src={pomodoro} alt="Pomodoro" />
      </h1>
      <Timers state={state} dispatch={dispatch} />
      <Clock state={state} dispatch={dispatch} />
      <p id="credits">by LazaroFilm - last update Oct 116 4:43 PM</p>
      <p>hello</p>
      <p>{Start(state)}</p>
    </div>
  );
}
