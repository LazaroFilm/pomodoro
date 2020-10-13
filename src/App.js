import React from "react";
import pomodoro from "./pomodoro.png";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faPlay,
  faPause,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1
        id="pomodoro"
        className="display-4 d-flex justify-content-center my-4"
      >
        <img id="pomodoro" src={pomodoro} alt="Pomodoro" />
        {/* <span role="img" aria-label="tomato">
          🍅 ⏲️
        </span> */}
      </h1>
      {/* <hr className="my-2" /> */}
      <div className="d-flex flex-row justify-content-center">
        <div id="session-block" className="p-2 text-center">
          <div id="session-label" className="alert alert-primary" role="alert">
            <div>Session:</div>
            <div className="lead">
              <div id="session-length" className="badge badge-primary lead">
                25 min
              </div>
            </div>
            <div
              className="btn-group mt-2"
              role="group"
              aria-label="set session length"
            >
              <Button id="session-decrement" className="btn btn-primary">
                <FontAwesomeIcon icon={faCaretDown} size="2x" />
              </Button>
              <Button id="session-increment" className="btn btn-primary">
                <FontAwesomeIcon icon={faCaretUp} size="2x" />
              </Button>
            </div>
          </div>
        </div>
        <div id="break-block" className="p-2 text-center">
          <div id="break-label" className="alert alert-success" role="alert">
            <div>Break:</div>
            <div className="lead">
              <span id="break-length" className="badge badge-success">
                5 min
              </span>
            </div>
            <div
              className="btn-group mt-2"
              role="group"
              aria-label="set break length"
            >
              <Button id="break-decrement" className="btn btn-success">
                <FontAwesomeIcon icon={faCaretDown} size="2x" />
              </Button>
              <Button id="break-increment" className="btn btn-success">
                <FontAwesomeIcon icon={faCaretUp} size="2x" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron text-center mt-4 py-4">
        <h1 className="display-2" id="time-left">
          25:00
        </h1>
        <p className="lead alert badge-primary display-4" id="timer-label">
          Work Hard!
        </p>
        <hr className="my-3" />
        <p className="lead">
          <a className="btn btn-dark btn-lg" id="start_stop" role="button">
            <FontAwesomeIcon icon={faPlay} /> <FontAwesomeIcon icon={faPause} />
          </a>{" "}
          <a className="btn btn-secondary btn-lg" id="reset" role="button">
            <FontAwesomeIcon icon={faRedoAlt} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
