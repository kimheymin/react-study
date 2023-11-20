import React, { useCallback, useEffect, useState } from "react";

export default function RuseCallbackEx2() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const handleChange = (e) => setSize(e.target.value);
  const handleBg = () => setIsDark(!isDark);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input type="number" value={size} onChange={handleChange} />
      <button onClick={handleBg}>Change bg</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

function Box({ createBoxStyle }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("박스 키우기");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
}
