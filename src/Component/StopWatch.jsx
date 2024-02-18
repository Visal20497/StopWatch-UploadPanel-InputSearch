import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [item, setItem] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setItem((preTime) => preTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setItem(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    let second = item;
    const hours = Math.floor(second / 3600);
    const minutes = Math.floor((second % 3600) / 60);
    const remainingSeconds = second % 60;
    const pad = (num) => (num < 10 ? "0" + num : num);
    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  let style = {
    border: "1px solid black",
    width: "20%",
    padding: "10px",
    paddingLeft: "50px",
    borderRadius:"10px",
    backgroundColor:"#e584f0"
  };
  let container = {
    diaplay: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItem: "center",
    marginTop: "20%",
    marginLeft: "40%",
  };
  let button={
    margin:"10px",
    backgroundColor:"#639e55",
    border:"none",
    borderRadius:"5px",
    height:"50px",
    width:"80px",
    fontWidth:"1000",
    fontSize:"18px",
    marginLeft:"20px",
    color:"white"
    
  }

  return (
    <div style={container}>
      <h1 style={style}>{formatTime()}</h1>
      <button style={button} onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
      <button style={button}onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
