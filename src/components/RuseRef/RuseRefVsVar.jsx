import React, { useRef, useState } from "react";

export default function RuseRefVsVar() {
  const [render, setRender] = useState(0);

  const countRef = useRef(0);
  let countVar = 0;

  const handleIncreaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref", countRef.current);
  };

  const handleIncreaseVar = () => {
    countVar = countVar + 1;
    console.log("countVar", countVar);
  };

  const handleRender = () => {
    setRender(render + 1);
  };

  const showValue = ()=> console.log(`Ref: ${countRef.current}, Var: ${countVar}`)

  return (
    <div>
      <p>Ref : {countRef.current} </p>
      <p>Var : {countVar} </p>
      <button onClick={handleIncreaseRef}>Ref 올려</button>
      <button onClick={handleIncreaseVar}>Var 올려</button>
      <button onClick={handleRender}>렌더!</button>
      <button onClick={showValue}>Ref랑 Var값 출력</button>
    </div>
  );
}
