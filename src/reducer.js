function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "session-decrement":
      if (state.started) {
        return (
          state.sessionTime > 0 && {
            ...state,
            sessionTime: state.sessionTime - 1,
            clockTime: [state.clockTime[0] - 1, state.clockTime[1]],
          }
        );
      } else {
        return (
          state.sessionTime > 0 && {
            ...state,
            sessionTime: state.sessionTime - 1,
            clockTime: [state.sessionTime - 1, state.clockTime[1]],
          }
        );
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
      return (
        state.breakTime > 0 && { ...state, breakTime: state.breakTime - 1 }
      );
    case "break-increment":
      return { ...state, breakTime: state.breakTime + 1 };
    case "start-stop":
      if (!state.started) {
        console.log("not started, starting now");
      } else {
        console.log("started, stopping now");
      }
      console.log(state.started);
      return { ...state, started: !state.started };
    default:
      break;
  }
}

export default reducer;
