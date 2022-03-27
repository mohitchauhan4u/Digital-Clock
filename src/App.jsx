/**
 * It updates the time every second.
 * @returns A function that returns a string.
 */
import React, { useState } from "react";
import './App.css'
const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(time);
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  setInterval(updateTime, 1000);
  return <h1>{cTime}</h1>;
};
export default App;
