import React, { useState } from "react";
import pomodoro from "./pomodoro.png";
// import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Clock from "./Clock";
import Timers from "./Timers";

function App() {
  const [started, setStarted] = useState(false);
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const [clockTime, setClockTime] = useState([25, 0]);
  const [test, setTest] = useState("initial");

  const handleTimerSet = (e) => {
    switch (e) {
      case "session-decrement":
        if (sessionTime > 0) {
          setSessionTime(sessionTime - 1);
          setClockTime([clockTime[0] - 1, 0]);
        }
        break;
      case "session-increment":
        return setSessionTime(sessionTime + 1);
      case "break-decrement":
        return breakTime > 0 && setBreakTime(breakTime - 1);
      case "break-increment":
        return setBreakTime(breakTime + 1);
      default:
        break;
    }
  };

  const handleStartStop = () => {
    if (!started) {
      setTest("STARTED");
      handleStart();
    }
    setStarted(!started);
    console.log(started);
  };

  const handleStop = () => {
    console.log("STOP (in the name of love)");
  };

  const handleStart = () => {
    console.log(clockTime);
    let min = clockTime[0];
    let sec = clockTime[1];
    let keepGoing = true;
    console.log(`${min}:${sec}`);
    const countdown = () => {
      keepGoing = !started;
      console.log(`keepGoing: ${keepGoing}`);
      // console.log("countdown");

      // console.log(`${min}:${sec}`);
      if (sec === 0) {
        // console.log("tic");
        min--;
        sec = 10;
        setClockTime([min, sec]);
        console.log(`tic ${min}:${sec}`);
      } else {
        // console.log("toc");
        sec--;
        setClockTime([min, sec]);
        console.log(`toc ${min}:${sec}`);
      }

      setTimeout(() => {
        console.log(keepGoing);
        if (keepGoing) {
          countdown();
        } else {
          console.log("STOP!");
          handleStop();
        }
      }, 1000);
    };

    setClockTime([sessionTime, 0]);
    // console.log("about to while");
    console.log("starting countdown");
    setTimeout(() => {
      countdown();
    }, 1000);

    // if (clockTime[0] === 0) {
    //   console.log("THE END");
    // } else {
    //   countdown;
    // }
  };

  return (
    <div className="App">
      {/* LOGO */}
      <h1 id="pomodoro" className="d-flex justify-content-center my-2">
        <img id="pomodoro" src={pomodoro} alt="Pomodoro" />
      </h1>
      {/* TIMERS */}
      <Timers
        sessionTime={sessionTime}
        breakTime={breakTime}
        handleTimerSet={handleTimerSet}
      />

      {/* CLOCK */}
      <Clock clockTime={clockTime} handleStartStop={handleStartStop} />
      <p id="credits">by LazaroFilm - last update Oct 13 11:05 AM</p>
      <p>{test}</p>
      <p>
        {clockTime[0]}:{clockTime[1]}
      </p>
    </div>
  );
}

export default App;
