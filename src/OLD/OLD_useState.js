const [started, setStarted] = useState(false);
const [sessionTime, setSessionTime] = useState(25);
const [breakTime, setBreakTime] = useState(5);

const [clockTime, setClockTime] = useState([25, 0]);
const [test, setTest] = useState("initial");

const handleTimerSet = (e) => {
  switch (e) {
    case "session-decrement":
      if (sessionTime > 0) {
        setSessionTime(sessionTime - 1);
        if (started) {
          setClockTime([sessionTime, 0]);
        }
        // setClockTime([clockTime[0] - 1, 0]);
      }
      break;
    case "session-increment":
      setSessionTime(sessionTime + 1);
      // setClockTime([clockTime[0] + 1, 0]);
      break;
    case "break-decrement":
      return breakTime > 0 && setBreakTime(breakTime - 1);
    case "break-increment":
      return setBreakTime(breakTime + 1);
    default:
      break;
  }
};

const handleStartStop = () => {
  if (!started) {
    setTest("STARTED");
    handleStart();
  }
  setStarted(!started);
  console.log(started);
};

const handleStop = () => {
  console.log("STOP (in the name of love)");
};

const handleStart = () => {
  setClockTime([sessionTime, 0]);
  console.log(clockTime);
  let min = clockTime[0];
  let sec = clockTime[1];
  let keepGoing = true;
  console.log(`${min}:${sec}`);
  const countdown = () => {
    keepGoing = !started;
    console.log(`keepGoing: ${keepGoing}`);
    // console.log("countdown");

    // console.log(`${min}:${sec}`);
    if (sec === 0) {
      // console.log("tic");
      min--;
      sec = 59;
      setClockTime([min, sec]);
      console.log(`tic ${min}:${sec}`);
    } else {
      // console.log("toc");
      sec--;
      setClockTime([min, sec]);
      console.log(`toc ${min}:${sec}`);
    }

    setTimeout(() => {
      console.log(keepGoing);
      if (keepGoing) {
        countdown();
      } else {
        console.log("STOP!");
        handleStop();
      }
    }, 1000);
  };

  setClockTime([sessionTime, 0]);
  // console.log("about to while");
  console.log("starting countdown");
  setTimeout(() => {
    countdown();
  }, 1000);

  // if (clockTime[0] === 0) {
  //   console.log("THE END");
  // } else {
  //   countdown;
  // }
};
