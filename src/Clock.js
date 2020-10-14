import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

function Clock({ clockTime, handleStartStop }) {
  return (
    <div>
      <div className="jumbotron text-center mt-2 py-3">
        <h1 className="display-2" id="time-left">
          {clockTime[0]}:
          {clockTime[1].toString().length === 1
            ? `0${clockTime[1]}`
            : clockTime[1]}
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
    </div>
  );
}

export default Clock;
