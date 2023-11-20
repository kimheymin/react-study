import React, { useCallback, useEffect, useState } from "react";

export default function RuseCallbackEx1() {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => setText(e.target.value);
  const handleToggle = () => setToggle(!toggle);

  const handleClick = useCallback(() => {
    console.log(text);
    return;
  }, [text]);

  useEffect(() => {
    console.log("클릭됨!");
  }, [handleClick]);

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleToggle}>{toggle.toString()}</button>
      <br />
      <button onClick={handleClick}>Call someFunc</button>
    </div>
  );
}
