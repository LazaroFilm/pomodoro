import { useReducer } from "react";

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "session-decrement":
      if (state.sessionTime > 0) {
        if (state.started) {
          return {
            ...state,
            sessionTime: state.sessionTime - 1,
            clockTime: [state.clockTime[0] - 1, state.clockTime[1]],
          };
        } else {
          return (
            state.sessionTime > 0 && {
              ...state,
              sessionTime: state.sessionTime - 1,
              clockTime: [state.sessionTime - 1, state.clockTime[1]],
            }
          );
        }
      } else {
        return { ...state };
      }
    case "session-increment":
      if (state.started) {
        return {
          ...state,
          sessionTime: state.sessionTime + 1,
          clockTime: [state.clockTime[0] + 1, state.clockTime[1]],
        };
      } else {
        return {
          ...state,
          sessionTime: state.sessionTime + 1,
          clockTime: [state.sessionTime + 1, state.clockTime[1]],
        };
      }
    case "break-decrement":
      if (state.breakTime > 0) {
        console.log("-1 break");
        return { ...state, breakTime: state.breakTime - 1 };
      } else {
        console.log("zero break");
        return { ...state };
      }
    case "break-increment":
      return { ...state, breakTime: state.breakTime + 1 };
    case "reset":
      return {
        started: false,
        sessionTime: 25,
        breakTime: 5,
        clockTime: [25, 0],
        test: "initial",
      };
    //! start stop
    case "start-stop":
      if (state.started) {
        console.log("stopping now 🛑");
        return { ...state, started: false, test: "Stopping" };
      } else {
        console.log("starting now ⏲️");
        // Countdown(state);
        return { ...state, started: true, test: "Starting" };
      }
    case "one-second":
      if (state.clockTime[1] === 0) {
        console.log("zero sec");
        return { ...state, clockTime: [state.clockTime[0] - 1, 59] };
      } else {
        console.log("still counting down");
        return {
          ...state,
          clockTime: [state.clockTime[0], state.clockTime[1] - 1],
        };
      }

    default:
      throw new Error();
  }
}

const Countdown = (state) => {
  console.log("Counting down");
  setTimeout(() => {
    console.log("TIME OUT");
    console.log(state.clockTime);
    // while (state.clockTime !== [0, 0]) {
    // dispatch({ type: "one-second" });
    // }
  }, 1000);
};
export default reducer;
