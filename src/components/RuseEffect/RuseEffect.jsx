import React, { useState } from "react";
import Timer from "./timer/Timer";

export default function RuseEffect() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div>
      {toggle && <Timer />}
      <button onClick={handleToggle}>Toggle Timer</button>
    </div>
  );
}
