import React, { useState } from "react";
import pomodoro from "./pomodoro.png";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Clock from "./Clock";
import Timers from "./Timers";

function App() {
  const [started, setStarted] = useState(false);
  const [start, setStart] = useState(Date.now());
  const [stop, setStop] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [test, setTest] = useState("initial");

  const handleTimerSet = (e) => {
    switch (e) {
      case "session-decrement":
        return sessionTime > 0 && setSessionTime(sessionTime - 1);
      case "session-increment":
        return setSessionTime(sessionTime + 1);
      case "break-decrement":
        return breakTime > 0 && setSessionTime(sessionTime - 1);
      case "break-increment":
        return setBreakTime(breakTime + 1);
      default:
        break;
    }
  };

  const handleStartStop = () => {
    if (started) {
      setTest("STOPPED");
      setStarted(false);
      handleStop();
    } else {
      setTest("STARTED");
      setStarted(true);
      handleStart();
    }
  };

  const handleStart = () => {};

  const handleStop = () => {
    // let stopDate = Date.now();
    // console.log(stopDate);
    setStop(Date.now());
    handleElapsed();
  };

  const handleElapsed = () => {
    console.log(`start: ${start.getTime} stop: ${stop.getTime}`);
    let elapsedDate = stop - start;
    console.log(start);
    console.log(stop);
    console.log(Math.round(elapsedDate / 1000));
    setElapsed(Math.round(elapsedDate / 1000));
  };

  return (
    <div className="App">
      {/* LOGO */}
      <h1 id="pomodoro" className="d-flex justify-content-center my-2">
        <img id="pomodoro" src={pomodoro} alt="Pomodoro" />
      </h1>
      {/* SET TIMERS */}
      <Timers
        sessionTime={sessionTime}
        breakTime={breakTime}
        handleTimerSet={handleTimerSet}
      />

      {/* JUMBOTRON */}
      <div className="jumbotron text-center mt-2 py-3">
        <h1 className="display-2" id="time-left">
          25:00
        </h1>
        <div className="lead alert badge-primary display-4" id="timer-label">
          <strong>Work Hard!</strong>
        </div>
        <hr className="my-3" />
        <div
          className="btn-group mt-2 lead"
          role="group"
          aria-label="Play/Pause Reset"
        >
          <Button
            className="btn btn-dark btn-lg"
            id="start_stop"
            role="button"
            onClick={() => handleStartStop()}
          >
            <FontAwesomeIcon icon={faPlay} /> <FontAwesomeIcon icon={faPause} />
          </Button>{" "}
          <Button className="btn btn-secondary btn-lg" id="reset" role="button">
            <FontAwesomeIcon icon={faRedoAlt} />
          </Button>
        </div>
      </div>
      <p id="credits">by LazaroFilm - last update Oct 13 11:05 AM</p>
      <p>{test}</p>
      {/* <p>Start Time: {() => start}</p> */}
      {/* <p>Stop Time: {() => stop.getTime}</p> */}
      <p>Elapsed Time: {elapsed}</p>
    </div>
  );
}

export default App;
