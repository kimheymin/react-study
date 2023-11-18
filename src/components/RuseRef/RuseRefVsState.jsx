import React, { useRef, useState } from 'react';

export default function RuseRefVsState() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  console.log('렌더링..');

  const handleIncreaseState = ()=> setCount(count+1);

  const handleIncreaseRef = ()=> {
    ref.current = ref.current + 1;
    console.log('ref', ref.current); 
    //ref는 아무리 수정해도 컴포넌트를 렌더링 시키지 않음
  }
  return (
    <div>
      <p>state : {count} </p>
      <p>ref : {ref.current} </p>
      <button onClick={handleIncreaseState}>State 올려</button>
      <button onClick={handleIncreaseRef}>Ref 올려</button>
    </div>
  );
}