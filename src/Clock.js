import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

function Clock({ state, dispatch }) {
  // * Update Timer Label
  const [bannerClass, setBannerClass] = useState(
    "lead alert badge-secondary display-4"
  );
  const [bannerTitle, setBannerTitle] = useState("session");
  useEffect(() => {
    if (state.runningType === "init") {
      setBannerClass("lead alert badge-secondary display-4");
      setBannerTitle("pomodoro");
    } else if (state.runningType === "session") {
      setBannerClass("lead alert badge-primary display-4");
      setBannerTitle("Session");
    } else if (state.runningType === "break") {
      setBannerClass("lead alert badge-success display-4");
      setBannerTitle("Break");
    }
  }, [state.runningType]);

  return (
    <div>
      <div className="jumbotron text-center mt-2 py-3">
        <h1 className="display-2" id="time-left">
          {/* adds zeros to display as mm:ss */}
          {state.clockTime[0].toString().length === 1
            ? `0${state.clockTime[0]}`
            : state.clockTime[0]}
          :
          {state.clockTime[1].toString().length === 1
            ? `0${state.clockTime[1]}`
            : state.clockTime[1]}
        </h1>
        <div className={bannerClass} id="timer-label">
          {bannerTitle}
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
            onClick={() => {
              dispatch({ type: "reset" });
              setBannerTitle("pomodoro");
              // * HTML Audio
              // document.getElementById("beep").pause();
              // document.getElementById("beep").currentTime = 0;
            }}
          >
            <FontAwesomeIcon icon={faRedoAlt} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Clock;
