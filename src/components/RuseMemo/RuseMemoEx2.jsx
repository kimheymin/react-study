import React, { useEffect, useMemo, useState } from "react";

export default function RuseMemoEx2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const handleChange = (e) => setNumber(e.target.value);
  const handleClick = () => setIsKorea(!isKorea);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={number} onChange={handleChange} />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={handleClick}>비행기 타자</button>
    </div>
  );
}
