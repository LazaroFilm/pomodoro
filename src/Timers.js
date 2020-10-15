import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Timers({ state, dispatch }) {
  return (
    <>
      <div className="d-flex flex-row justify-content-center">
        <div id="session-block" className="p-2 text-center">
          <div id="session-label" className="alert alert-primary" role="alert">
            <div>Session:</div>
            <div className="lead">
              <div id="session-length" className="badge badge-primary lead">
                {state.sessionTime} min
              </div>
            </div>
            <div
              className="btn-group mt-2"
              role="group"
              aria-label="set session length"
            >
              <Button
                id="session-decrement"
                className="btn btn-primary"
                onClick={() => dispatch({ type: "session-decrement" })}
              >
                <FontAwesomeIcon icon={faCaretDown} size="2x" />
              </Button>
              <Button
                id="session-increment"
                className="btn btn-primary"
                onClick={() => dispatch({ type: "session-increment" })}
              >
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
                {state.breakTime} min
              </span>
            </div>
            <div
              className="btn-group mt-2"
              role="group"
              aria-label="set break length"
            >
              <Button
                id="break-decrement"
                className="btn btn-success"
                onClick={() => dispatch({ type: "break-increment" })}
              >
                <FontAwesomeIcon icon={faCaretDown} size="2x" />
              </Button>
              <Button
                id="break-increment"
                className="btn btn-success"
                onClick={() => dispatch({ type: "break-increment" })}
              >
                <FontAwesomeIcon icon={faCaretUp} size="2x" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timers;
