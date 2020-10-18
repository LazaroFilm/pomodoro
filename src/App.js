import React, { useReducer, useEffect, useRef } from "react";
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
    isRunning: false,
    runningType: "Play Hard!",
    sessionTime: 25,
    breakTime: 5,
    clockTime: [25, 0],
    test: "initial",
    intervalID: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [playRing] = useSound(PomodoroRing);
  const [playTicking] = useSound(PomodoroTicking, { volume: 0.2 });

  //* Counting down
  useEffect(() => {
    let intervalID;
    if (state.isRunning) {
      playTicking();
      intervalID = setInterval(() => {
        dispatch({ type: "tic-toc" });
      }, 10);
    }
    return () => {
      clearInterval(intervalID);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isRunning]);

  //* When timer runs out
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      if (state.clockTime[0] <= 0 && state.clockTime[1] === 0) {
        console.log(`DING DING DING!`);
        playRing();
        dispatch({ type: "timer-end" });
      }
    } else didMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.clockTime]);

  return (
    <div className="App">
      <h1 id="pomodoro" className="d-flex justify-content-center my-2">
        <img id="pomodoro" src={pomodoro} alt="Pomodoro" />
      </h1>
      <Timers state={state} dispatch={dispatch} />
      <Clock state={state} dispatch={dispatch} />
      <p id="credits">by LazaroFilm - last update Oct 17 4:35 PM</p>
      {/* <audio
        className="clip"
        id={soundID}
        src={soundSource}
        type="audio/mpeg"
      ></audio> */}
    </div>
  );
}
