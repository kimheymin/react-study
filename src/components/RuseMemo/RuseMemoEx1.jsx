import React, { useMemo, useState } from "react";

//성능 최적화 1 - useMemo
export default function RuseMemoEx1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const handleHardChange = (e) => setHardNumber(parseInt(e.target.value));
  const handleEasyChange = (e) => setEasyNumber(parseInt(e.target.value));

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber); //메모이제이션할 값 전달
  }, [hardNumber]); //의존성 배열, 그 값이 바뀔때만 실행

  // const hardSum = hardCalculate(hardNumber);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input type="number" value={hardNumber} onChange={handleHardChange} />
      <span>+ 10000 = {hardSum} </span>
      <h3>쉬운 계산기</h3>
      <input type="number" value={easyNumber} onChange={handleEasyChange} />
      <span>+ 1 = {easySum} </span>
    </div>
  );
}

function hardCalculate(number) {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) {
    return number + 10000;
  }
}

function easyCalculate(number) {
  console.log("짱 쉬운 계산");
  return number + 1;
}
