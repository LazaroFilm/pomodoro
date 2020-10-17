import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedoAlt } from "@fortawesome/free-solid-svg-icons";

// const StartStop = (state, dispatch, stopNow) => {
//   let ticToc;
//   console.log(`This is: ${ticToc}`);
//   if (ticToc) {
//     console.log("clearInterval stop!");
//     clearInterval(ticToc);
//     ticToc = undefined;
//   } else {
//     ticToc = setInterval(() => {
//       console.log(`This is: ${ticToc}`);
//       console.log(`tic toc`);
//       dispatch({ type: "tic-toc" });
//     }, 1000);
//   }
// };

function Clock({ state, dispatch }) {
  return (
    <div>
      <div className="jumbotron text-center mt-2 py-3">
        <h1 className="display-2" id="time-left">
          {state.clockTime[0]}:
          {state.clockTime[1].toString().length === 1
            ? `0${state.clockTime[1]}`
            : state.clockTime[1]}
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
            onClick={() => {
              dispatch({ type: "start-stop" });
              // StartStop(state, dispatch, "start");
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
          <Button
            onClick={() => {
              // StartStop(state, dispatch, "stop");
            }}
          >
            {" "}
            TEST{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Clock;
