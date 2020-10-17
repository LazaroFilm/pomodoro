function reducer(state, action) {
  // console.log(state);
  switch (action.type) {
    case "session-decrement":
      if (state.sessionTime > 0) {
        if (state.isRunning === "start") {
          return { ...state };
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
      if (state.isRunning === "start") {
        return { ...state };
      } else {
        return {
          ...state,
          sessionTime: state.sessionTime + 1,
          clockTime: [state.sessionTime + 1, state.clockTime[1]],
        };
      }
    case "break-decrement":
      if (state.isRunning === "start") {
        return { ...state };
      } else if (state.breakTime > 0) {
        return { ...state, breakTime: state.breakTime - 1 };
      } else {
        return { ...state };
      }
    case "break-increment":
      if (state.isRunning === "start") {
        return { ...state };
      } else {
        return { ...state, breakTime: state.breakTime + 1 };
      }
    case "reset":
      return {
        isRunning: "stop",
        sessionTime: 25,
        breakTime: 5,
        clockTime: [25, 0],
        test: "initial",
      };
    case "start-stop":
      if (state.isRunning === "start") {
        console.log("stopping now 🛑");
        return { ...state, isRunning: "stop" };
      } else {
        console.log("starting now ⏲️");
        return { ...state, isRunning: "start" };
      }
    case "tic-toc":
      if (state.clockTime[1] === 0) {
        return { ...state, clockTime: [state.clockTime[0] - 1, 59] };
      } else {
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
