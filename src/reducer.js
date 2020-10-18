function reducer(state, action) {
  // console.log(state);
  switch (action.type) {
    // * Timer buttons
    case "session-decrement":
      if (state.sessionTime > 1) {
        if (state.isRunning) {
          return { ...state };
        } else {
          return {
            ...state,
            sessionTime: state.sessionTime - 1,
            clockTime: [state.sessionTime - 1, state.clockTime[1]],
          };
        }
      } else {
        return { ...state };
      }
    case "session-increment":
      if (state.isRunning) {
        return { ...state };
      } else if (state.sessionTime < 60) {
        return {
          ...state,
          sessionTime: state.sessionTime + 1,
          clockTime: [state.sessionTime + 1, state.clockTime[1]],
        };
      } else {
        return {
          ...state,
        };
      }
    case "break-decrement":
      if (state.isRunning) {
        return { ...state };
      } else if (state.breakTime > 1) {
        return { ...state, breakTime: state.breakTime - 1 };
      } else {
        return { ...state };
      }
    case "break-increment":
      if (state.isRunning) {
        return { ...state };
      } else if (state.breakTime < 60) {
        return { ...state, breakTime: state.breakTime + 1 };
      } else {
        return { ...state };
      }

    // * Clock buttons
    case "reset":
      return {
        isRunning: false,
        runningType: "init",
        sessionTime: 25,
        breakTime: 5,
        clockTime: [25, 0],
        test: "initial",
        intervalID: 0,
      };
    case "start-stop":
      if (state.isRunning) {
        // console.log("stopping now 🛑");
        return { ...state, isRunning: false };
      } else {
        // console.log("starting now ⏲️");
        if (state.runningType === "init") {
          return { ...state, isRunning: true, runningType: "session" };
        }
        return { ...state, isRunning: true };
      }

    // * Countdown
    case "tic-toc":
      if (state.clockTime[1] === 0) {
        return { ...state, clockTime: [state.clockTime[0] - 1, 59] };
      } else {
        return {
          ...state,
          clockTime: [state.clockTime[0], state.clockTime[1] - 1],
        };
      }
    case "timer-end":
      if (state.runningType === "break") {
        return {
          ...state,
          runningType: "session",
          clockTime: [state.sessionTime, 0],
        };
      } else {
        return {
          ...state,
          runningType: "break",
          clockTime: [state.breakTime, 0],
        };
      }
    default:
      throw new Error();
  }
}

export default reducer;
