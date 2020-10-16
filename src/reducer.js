// import { useReducer } from "react";

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
    case "start-stop":
      if (state.started) {
        console.log("stopping now 🛑");
        clearInterval();
        return { ...state, started: false, test: "Stopping" };
      } else {
        console.log("starting now ⏲️");
        console.log("keeps going? ");
        console.log(state);
        return { ...state, started: true, test: "starting" };
      }
    case "tic-toc":
      if (state.clockTime[1] === 0) {
        console.log(`TOC ${state.clockTime[0]} : ${state.clockTime[1]}`);
        return { ...state, clockTime: [state.clockTime[0] - 1, 59] };
      } else {
        console.log(`TOC ${state.clockTime[0]} : ${state.clockTime[1]}`);
        return {
          ...state,
          clockTime: [state.clockTime[0], state.clockTime[1] - 1],
        };
      }
    default:
      throw new Error();
  }
}

export default reducer;
