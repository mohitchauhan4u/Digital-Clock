import React, { useState } from "react";

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
