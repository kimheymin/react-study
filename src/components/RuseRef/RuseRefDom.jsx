import React, { useEffect, useRef, useState } from "react";

export default function RuseRefDom() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    alert(`환영합니다. ${text}`);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={text}
        placeholder="이름 입력..."
        onChange={handleChange}
      />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
