import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

function Clock({ state, dispatch }) {
  const [bannerClass, setBannerClass] = useState(
    "lead alert badge-success display-4"
  );
  useEffect(() => {
    if (state.runningType === "Pomodoro") {
      setBannerClass("lead alert badge-secondary display-4");
    } else if (state.runningType === "Work Hard!") {
      setBannerClass("lead alert badge-primary display-4");
    } else if (state.runningType === "Play Hard!") {
      setBannerClass("lead alert badge-success display-4");
    }
  }, [state.runningType]);
  return (
    <div>
      <div className="jumbotron text-center mt-2 py-3">
        <h1 className="display-2" id="time-left">
          {state.clockTime[0].toString().length === 1
            ? `0${state.clockTime[0]}`
            : state.clockTime[0]}
          :
          {state.clockTime[1].toString().length === 1
            ? `0${state.clockTime[1]}`
            : state.clockTime[1]}
        </h1>
        <div className={bannerClass} id="timer-label">
          <strong>{state.runningType}</strong>
        </div>
        {/* <Banner state={state} dispatch={dispatch} /> */}
        {/* <div className="lead alert badge-secondary display-4" id="timer-label">
          <strong>Pomodoro</strong>
        </div> */}
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
            onClick={() => {
              dispatch({ type: "start-stop" });
            }}
          >
            <FontAwesomeIcon icon={faPlay} /> <FontAwesomeIcon icon={faPause} />
          </Button>{" "}
          <Button
            className="btn btn-secondary btn-lg"
            id="reset"
            role="button"
            onClick={() => dispatch({ type: "reset" })}
          >
            <FontAwesomeIcon icon={faRedoAlt} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Clock;
// export { Banner };
